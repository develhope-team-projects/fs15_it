# Proposta modifiche

- Nel tailwind.config.js, aggiunto questo a theme: { extend: {

colors: {

buttons: "#228E99",

"buttons-hover": "#1B737B",

},

- Aggiunto questo file nella cartella /public:

### [background top image.jpg](https://github.com/jefreve/fs15-last-project/blob/main/my-app/public/background%20top%20image.jpg)

- Cancellato cartella /pages
- Creato src/app/components, dentro cui ho spostato Pulsante e usePulsante.jsx
- Creato src/app/design-system, dentro cui ora c'è page.jsx, che prima si chiamava DesignSystem.jsx e stava dentro a /pages

Questi 3 cambiamenti sono stati fatti perché:

![](https://t9004115569.p.clickup-attachments.com/t9004115569/489bbe45-5f04-44c1-97a9-1b37e06a225b/src%20Directory.png)

(Link della documentazione da cui è preso questo screenshot: [https://nextjs.org/docs/app/building-your-application/configuring/src-director](https://nextjs.org/docs/app/building-your-application/configuring/src-directory) )

Se c'è una cartella chiamata app oppure pages all'interno della root directory, quelle con lo stesso nome all'interno di src vengono ignorate, e questo avrebbe creato problemi col routing.

Ora navigando a [http://localhost:3000/design-system](http://localhost:3000/design-system)

si può vedere il Design System

- Aggiunto background image a home page

- Navbar iniziata: Logo, link al design system, scritta "sign up", pulsante "Log in"

- Aggiunti Link per navigare a Home e Design System

- Cambiato colore background e hover:bg di Pulsante

- Cambiato il modo di accedere ai loghi delle icone

al posto che fare import delle immagini nella cartella public, così:

import tiktok from "../public/tiktok.svg";

si può fare così e funziona uguale:

<_Image_

_src_\="/tiktok.svg"

_alt_\=""

_className_\=""

_width_\="25"

_height_\="25"

/>

Quindi modificato per tutte le icone svg e rimossi gli import che stavano in cima
