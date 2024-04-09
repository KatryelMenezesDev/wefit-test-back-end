import { Joi, Segments } from "celebrate";

import { customMessage } from "@utils/CelebrateErro";

export const DeleteUserValidator = {
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.string().required().regex(/^\d+$/).messages(customMessage("ID"))
  })
};
