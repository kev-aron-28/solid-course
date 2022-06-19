import axios from 'axios';

import { Post } from "./dependency-b";

export abstract class httpProvider {
    abstract get(url: string): any;
}

export class httpClient implements httpProvider {
    async get(url: string) {
        return axios.get(url)
    }
}