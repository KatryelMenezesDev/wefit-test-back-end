import { Joi, Segments } from "celebrate";

import { customMessage } from "@utils/CelebrateErro";

export const UpdateUserValidator = {
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required().messages(customMessage("ID"))
  }),
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string()
      .min(2)
      .max(255)
      .regex(/^[A-Za-zÀ-ÿ\s]+$/)
      .optional()
      .messages(customMessage("Name")),
    cnpj: Joi.string().allow(null).optional().regex(/^\d+$/).messages(customMessage("CNPJ")),
    cpf: Joi.string().optional().length(11).regex(/^\d+$/).messages(customMessage("CPF")),
    email: Joi.string().min(5).max(255).email().optional().messages(customMessage("Email")),
    cel: Joi.string().optional().length(11).regex(/^\d+$/).messages(customMessage("Cellphone")),
    tel: Joi.string().optional().length(10).regex(/^\d+$/).messages(customMessage("Telephone")),
    cep: Joi.string().optional().length(8).regex(/^\d+$/).messages(customMessage("Zip Code")),
    street: Joi.string().min(2).max(255).optional().messages(customMessage("Street")),
    number: Joi.string().optional().min(1).max(6).regex(/^\d+$/).messages(customMessage("Number")),
    city: Joi.string().min(2).max(255).optional().messages(customMessage("City")),
    district: Joi.string().min(2).max(255).optional().messages(customMessage("District")),
    state: Joi.string().min(2).max(255).optional().messages(customMessage("State"))
  })
};
