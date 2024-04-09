import { Joi, Segments } from "celebrate";

import { customMessage } from "@utils/CelebrateErro";

export const CreateUserValidator = {
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string()
      .min(2)
      .max(255)
      .regex(/^[A-Za-zÀ-ÿ\s]+$/)
      .required()
      .messages(customMessage("Name")),
    cnpj: Joi.string().allow(null).optional().regex(/^\d+$/).messages(customMessage("CNPJ")),
    cpf: Joi.string().required().length(11).regex(/^\d+$/).messages(customMessage("CPF")),
    email: Joi.string().min(5).max(255).email().required().messages(customMessage("Email")),
    cel: Joi.string().required().length(11).regex(/^\d+$/).messages(customMessage("Cellphone")),
    tel: Joi.string().required().length(10).regex(/^\d+$/).messages(customMessage("Telephone")),
    cep: Joi.string().required().length(8).regex(/^\d+$/).messages(customMessage("Zip Code")),
    street: Joi.string().min(2).max(255).required().messages(customMessage("Street")),
    number: Joi.string().required().min(1).max(6).regex(/^\d+$/).messages(customMessage("Number")),
    city: Joi.string().min(2).max(255).required().messages(customMessage("City")),
    district: Joi.string().min(2).max(255).required().messages(customMessage("District")),
    state: Joi.string().min(2).max(255).required().messages(customMessage("State"))
  })
};
