import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      type = "contact",
      name,
      firstName,
      lastName,
      email,
      phone,
      subject,
      message,
      city,
      motivation,
      interests,
      availability,
      consent
    } = body;

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        {
          success: false,
          error: "Adresse courriel invalide. Veuillez fournir une adresse valide."
        },
        { status: 400 }
      );
    }

    // Type-specific field validation
    if (type === "contact") {
      const contactName = name || `${firstName || ""} ${lastName || ""}`.trim();
      if (!contactName || !message) {
        return NextResponse.json(
          {
            success: false,
            error: "Veuillez renseigner votre nom et votre message."
          },
          { status: 400 }
        );
      }
    } else if (type === "membership") {
      if (!firstName || !lastName || !city || consent !== true) {
        return NextResponse.json(
          {
            success: false,
            error: "Veuillez remplir votre prénom, nom, ville de résidence et accepter le consentement."
          },
          { status: 400 }
        );
      }
    } else if (type === "volunteer") {
      if (!firstName || !lastName || !availability || consent !== true) {
        return NextResponse.json(
          {
            success: false,
            error: "Veuillez renseigner votre prénom, nom, disponibilités et accepter le consentement."
          },
          { status: 400 }
        );
      }
    }

    // Structured form payload
    const submission = {
      id: `sub_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`,
      receivedAt: new Date().toISOString(),
      type,
      data: {
        name: name || `${firstName || ""} ${lastName || ""}`.trim(),
        firstName: firstName || null,
        lastName: lastName || null,
        email: email.trim().toLowerCase(),
        phone: phone ? phone.trim() : null,
        subject: subject ? subject.trim() : null,
        message: message ? message.trim() : null,
        city: city ? city.trim() : null,
        motivation: motivation ? motivation.trim() : null,
        interests: Array.isArray(interests) ? interests : [],
        availability: availability || null,
        consent: Boolean(consent)
      }
    };

    // Log received submission in server logs
    console.log(`[REIFO Form Submission - ${type.toUpperCase()}]`, JSON.stringify(submission, null, 2));

    // Optional webhook forwarding (e.g., Zapier, Make, Slack, or CMS webhook)
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(submission)
        });
      } catch (webhookErr) {
        console.warn("[REIFO Webhook Warning] Could not forward submission to webhook:", webhookErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Votre demande a été traitée et enregistrée avec succès.",
        id: submission.id
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[REIFO Form Error]", error);
    return NextResponse.json(
      {
        success: false,
        error: "Une erreur interne est survenue lors de l'enregistrement de votre demande. Veuillez réessayer."
      },
      { status: 500 }
    );
  }
}
