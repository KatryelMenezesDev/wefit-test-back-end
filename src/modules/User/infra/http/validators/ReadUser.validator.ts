import { Joi, Segments } from "celebrate";

import { customMessage } from "@utils/CelebrateErro";

export const ReadUserValidator = {
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.string().required().regex(/^\d+$/).messages(customMessage("ID"))
  })
};
