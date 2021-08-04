import { v5 } from 'uuid';

export function generate() {
  const uuid = v5(Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5), "1e230887-bf0e-477d-9f68-a2c27edcbdf6")
  return `${uuid.split("-")[0]}${uuid.substr(uuid.length - 2)}`
}

export default generate