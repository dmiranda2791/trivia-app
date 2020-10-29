import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { Question } from "../store/entities";

interface Client {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  get(url: string): Promise<GetQuestionsResponse>;
}

type GetQuestionsResponse = {
  response_code: number;
  results: Question[];
};
type IdGeneratorType = () => string;

class DataService {
  client: Client;
  IdGenerator: IdGeneratorType;
  constructor(client: Client, IdGenerator: IdGeneratorType) {
    this.client = client;
    this.IdGenerator = IdGenerator;
  }
  async getQuestions(amount: number): Promise<Question[]> {
    try {
      const url = `https://opentdb.com/api.php?amount=${amount}&difficulty=hard&type=boolean`;
      let { results } = await this.client.get(url);

      results = results.map((question: Question) => ({
        id: this.IdGenerator(),
        ...question,
      }));

      return results;
    } catch (error) {
      console.error(error);
      throw new Error("An unexpected error occurred. Please try again later.");
    }
  }
}

const FetchClient = {
  async get(url: string): Promise<GetQuestionsResponse> {
    return fetch(url).then((response) => response.json());
  },
};
const instance = new DataService(FetchClient, uuidv4);

export default instance;
