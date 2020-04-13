import request from "@/utils/request";
import { UpdatePAGE_NAME_UPPER_CAMEL_CASEDto,CreatePAGE_NAME_UPPER_CAMEL_CASEDto } from "./data";

export async function queryPAGE_NAME_UPPER_CAMEL_CASEs(): Promise<any> {
  return request('', {
    method: 'GET',
  });
}
export async function createPAGE_NAME_UPPER_CAMEL_CASE(data:CreatePAGE_NAME_UPPER_CAMEL_CASEDto): Promise<any> {
  return request('', {
    method: 'POST',
    data,
  });
}

export async function updatePAGE_NAME_UPPER_CAMEL_CASE(data:UpdatePAGE_NAME_UPPER_CAMEL_CASEDto): Promise<any> {
  return request('', {
    method: 'PUT',
    data,
  });
}
