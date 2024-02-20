import nodemailer from "nodemailer"

export const emailRegistro = async (datos) => {

    const { email, nombre, token} = datos

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
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
        <a href="${process.env.FRONTEND_URL}/confirmar/${token}"> Comprobar Cuenta </a>
        </p>
        
        <p>Si tu no creaste esta cuenta puedes ignorar este mensaje.</p>
        `
      })
}

export const emailOlvidePassword = async (datos) => {

  const { email, nombre, token} = datos

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
      }
    });

    // Información del email

    const info = await transport.sendMail({
      from: " 'Mis Tareas - Administrador de proyectos' ",
      to: email,
      subject: "Mis Tareas - Reestablece tu Password",
      text: "Reestablece tu Password",
      html: `<p>Hola ${nombre}: </p>
      <p>Has solicitado reestablecer tu password.</p>
      <p>Sigue el siguiente enlace para generar un nuevo password:
      <p>
      <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer Password</a>
      </p>
      <br>
      
      <p>Si tu no solicitaste este email puedes ignorar este mensaje.</p>
      `
    })
}