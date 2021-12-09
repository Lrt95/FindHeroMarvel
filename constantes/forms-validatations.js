import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  password: yup
    .string()
    .min(6, 'Le mot de passe doit contenir au moins 6 caractères !')
    .required('Le mot de passe ne doit pas être vide !'),
  email: yup
    .string()
    .email("L'adresse mail est invalide !")
    .required("Le pseudo ou l'adresse mail ne doit pas être vide !"),
});
