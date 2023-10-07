# Proposta modifiche

1. Nel tailwind.config.js, aggiunto questo a theme: { extend: {

colors: {

buttons: "#228E99",

"buttons-hover": "#1B737B",

},

---

2. Aggiunto questo file nella cartella /public:

### [background top image.jpg](https://github.com/jefreve/fs15-last-project/blob/main/my-app/public/background%20top%20image.jpg)

---

I punti 3, 4, 5 sono collegati:

3. Cancellato cartella /pages

4. Creato src/app/components, dentro cui ho spostato Pulsante e usePulsante.jsx

5. Creato src/app/design-system, dentro cui ora c'è page.jsx, che prima si chiamava DesignSystem.jsx e stava dentro a /pages

Questi 3 cambiamenti sono stati fatti perché:

![Alt text](<my-app/public/src Directory.png>)

(Link della documentazione da cui è preso questo screenshot: [https://nextjs.org/docs/app/building-your-application/configuring/src-director](https://nextjs.org/docs/app/building-your-application/configuring/src-directory) )

Se c'è una cartella chiamata app oppure pages all'interno della root directory, quelle con lo stesso nome all'interno di src vengono ignorate, e questo avrebbe creato problemi col routing.

Ora navigando a [http://localhost:3000/design-system](http://localhost:3000/design-system)

si può vedere il Design System

---

6. Aggiunto background image a home page

---

7. Navbar iniziata: Logo, link al design system, scritta "sign up", pulsante "Log in"

---

8. Aggiunti Link per navigare a Home e Design System

---

9. Cambiato colore background e hover:bg di Pulsante

---

10. Cambiato il modo di accedere ai loghi delle icone

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

Quindi, nel file src/design-system/page.jsx modificato per tutte le icone svg e rimossi gli import che stavano in cima
