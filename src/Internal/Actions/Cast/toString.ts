import {
  Actions as NodeActions,
  type Types as NodeTypes,
} from '../../../Node/index.js'
import type { Client } from '../../Client/types.js'
import type { GlobalErrorType } from '../../Errors/error.js'

export declare namespace Actions_Cast_toString {
  type ParametersType = NodeTypes.Cast
  type ReturnType = string
  type ErrorType = GlobalErrorType
}
export async function Actions_Cast_toString(
  client: Client,
  cast: Actions_Cast_toString.ParametersType,
): Promise<Actions_Cast_toString.ReturnType> {
  const unwrappedText = await (async () => {
    let text = cast.text.value
    if (!cast.text.mentions) return text
    for (const mention of cast.text.mentions.reverse()) {
      const mentionUsername = await NodeActions.UserData.getUserDataUsername(
        client,
        { fid: mention.fid },
      )
      text = `${text.slice(0, mention.position)}@${mentionUsername}${text.slice(mention.position)}`
    }
    return text
  })()

  return unwrappedText
}

Actions_Cast_toString.parseError = (error: unknown) =>
  error as Actions_Cast_toString.ErrorType
