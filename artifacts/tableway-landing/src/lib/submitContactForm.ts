export type ContactFormPayload = {
  name: string;
  restaurant: string;
  email: string;
  phone?: string;
  message: string;
};

/** Server-side inbox — never rendered in the UI. */
const CONTACT_INBOX = "tableway@tableway.app";

export async function submitContactForm(payload: ContactFormPayload): Promise<void> {
  const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_INBOX}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: payload.name,
      email: payload.email,
      restaurant: payload.restaurant,
      phone: payload.phone?.trim() || "Not provided",
      message: payload.message,
      _subject: `TableWay contact — ${payload.restaurant}`,
      _template: "table",
      _captcha: "false",
    }),
  });

  if (!response.ok) {
    throw new Error("Contact form submission failed");
  }

  const result = (await response.json()) as { success?: string };
  if (result.success !== "true") {
    throw new Error("Contact form submission rejected");
  }
}
