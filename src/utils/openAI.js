import { GPT_KEY } from "./constants";
import OpenAI from "openai"

const openAI = new OpenAI({
    apiKey: GPT_KEY, 
    dangerouslyAllowBrowser: true
});

export default openAI;