export interface IProduct {
    fields: {
        title: string;
        content: Document;
        price: string;
        thumbnail:{
            fields:{
                file:{
                    url:string;
                }
            }
        }
    }
}

const base_url = process.env.CONTENTFUL_BASE_URL;
const spaceId = process.env.CONTENTFUL_SPACE_ID;
const token = process.env.CONTENTFUL_TOKEN;

import { Document } from "@contentful/rich-text-types";
import resolveResponse from "contentful-resolve-response";

export const getProducts = async (): Promise<IProduct[]> => {
  const res = await fetch(
    `${base_url}/spaces/${spaceId}/environments/master/entries?access_token=${token}&content_type=product`,
    {
      next: { revalidate: 60 },
    }
  );
  const data = await res.json();
  const result = resolveResponse(data)
  return result as IProduct[];
};