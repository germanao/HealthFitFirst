import * as yup from 'yup'

export const validationSchema = yup.object().shape({
  description: yup.string().required('Descrição da atividade deve ser informada'),
  amount: yup.string().required('Quantidade de calorias deve ser informada'),
})
