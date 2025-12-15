import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
   try {
      const body = await req.json();

      // 🔎 Debug : vérifie que les données sont bien reçues
      // console.log("Formulaire reçu :", body);

      const { name, email, phone, message, privacy } = body;

      const { data, error } = await resend.emails.send({
         from: "Site Infirmière 68000 <site-infirmiere68000@graphandco.net>",
         to: ["contact@graphandco.com"],
         subject:
            "Nouveau message depuis le formulaire de contact du site Infirmière 68000",
         react: EmailTemplate({
            name,
            email,
            phone,
            message,
            privacy,
         }),
      });

      if (error) {
         console.error("Erreur Resend :", error);
         return Response.json({ error: "Erreur d'envoi." }, { status: 500 });
      }

      return Response.json({ success: true });
   } catch (err) {
      console.error("Erreur serveur :", err);
      return Response.json(
         { error: "Erreur interne du serveur" },
         { status: 500 }
      );
   }
}
