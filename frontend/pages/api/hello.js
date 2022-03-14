// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { sendPasswordHash } from "./encryption"
export default (req, res) => {
  res.status(200).json(
    { username: 'admin@admin.com',
    password: sendPasswordHash('admin')
 })
}
// words": [
//   -1939245339,
//   -1254030315,
//   -1108801347,
//   1307448799,
//   -1318606392,
//   1945914296,
//   -1474334934,
//   -1270306536
// ],