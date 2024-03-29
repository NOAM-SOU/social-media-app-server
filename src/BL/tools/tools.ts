import { CommentI } from "../../interfaces/comment";

export const filterFunc = (arr: any) => {
  const filter = arr.map((e: CommentI) => {
    return {
      comment: e.content,
      user: e.userId,
    };
  });
  return filter;
};

// const routerFunc = async (res, error, func, p1, p2, p3) => {
//   try {
//     console.log("params", p1, p2);
//     const data = await func(p1, p2, p3);
//     res.send(data);
//   } catch (err) {
//     if (err instanceof error) {
//       res.status(401).send({
//         error: err.message,
//         code: err.code,
//       });
//     } else {
//       res.status(500).send({
//         error: err.message,
//         code: err.code,
//       });
//     }
//   }
// };
