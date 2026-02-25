import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.json({
        success: false,
        message: "Not authorized login again",
      });
    }
    // console.log(token);
    const decodedValue = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = decodedValue.userId;
    // console.log(req.body);
    next();
  } catch (error) {
    console.log(error.message);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export default authUser;
