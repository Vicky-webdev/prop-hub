

### ✅ How to Trigger the Modal From **Any Component/Page**



##### * The `Layout.tsx` file contains the `LoginModal` and `RegisterModal`

##### You built `AuthModalContext` to control modal visibility globally


import { useAuthModal } from '@/context/AuthModalContext';

const SomeComponent = () => {
  const { openLogin, openRegister } = useAuthModal();

  return (
    `<div>`
      `<button onClick={openLogin}>`Login `</button>`
      `<button onClick={openRegister}>`Register `</button>`
    `</div>`
  );
};


### **No extra setup needed 💡**
