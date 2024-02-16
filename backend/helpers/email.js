import nodemailer from "nodemailer"

export const emailRegistro = async (datos) => {

    const { email, nombre, token} = datos

    const transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "9ece0b28cb80b0",
          pass: "cb424521938e50"
        }
      });

      // Información del email

      const info = await transport.sendMail({
        from: " 'Mis Tareas - Administrador de proyectos' ",
        to: email,
        subject: "Mis Tareas - Comprueba tu cuenta",
        text: "Comprueba tu cuenta en Mis Tareas",
        html: `<p>Hola ${nombre}: </p>
        <p> Bienvenido a Mis Tareas.</p>
        <p> Tu cuenta ya está casi lista, solo debes verificarla en el siguiente enlace:
        <p>
        <a href="${process.env.FRONTEND_URL}/confirmar/${token}}"> Comprobar Cuenta </a>
        </p>
        
        <p>Si tu no creaste esta cuenta puedes ignorar este mensaje.</p>
        `
      })
}