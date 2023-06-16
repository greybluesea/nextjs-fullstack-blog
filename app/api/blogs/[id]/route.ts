export const GET = async (req: Request, res: Response) => {
  const id = req.url;
  console.log(id);
};

export const POST = async (req: Request, res: Response) => {
  console.log("request for POST a blog by id");
};
