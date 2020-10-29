import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { Question } from "../store/entities";
import { AllHtmlEntities } from "html-entities";

interface Client {
  get(_: string): Promise<GetQuestionsResponse>;
}

type GetQuestionsResponse = {
  response_code: number;
  results: Question[];
};
type IdGeneratorType = () => string;

interface IDescriptionParser {
  decode(_: string): string;
}

class DataService {
  client: Client;
  IdGenerator: IdGeneratorType;
  DescriptionParser: IDescriptionParser;
  constructor(
    client: Client,
    IdGenerator: IdGeneratorType,
    DescriptionParser: IDescriptionParser
  ) {
    this.client = client;
    this.IdGenerator = IdGenerator;
    this.DescriptionParser = DescriptionParser;
  }
  async getQuestions(amount: number): Promise<Question[]> {
    try {
      const url = `https://opentdb.com/api.php?amount=${amount}&difficulty=hard&type=boolean`;
      let { results } = await this.client.get(url);

      results = results.map((question: Question) => ({
        ...question,
        id: this.IdGenerator(),
        question: this.DescriptionParser.decode(question.question),
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

const AllHtmlEntitiesParser = new AllHtmlEntities();
const instance = new DataService(FetchClient, uuidv4, AllHtmlEntitiesParser);

export default instance;
