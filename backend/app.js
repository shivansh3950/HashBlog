import  express  from 'express';
import mongoose  from 'mongoose';
import blogRouter from './routes/blog-routes';
import router from "./routes/user-routes";
import cors from 'cors';
const app =express();
app.use(cors());
app.use(express.json());
app.use("/api/user",router) ;
app.use("/api/blog",blogRouter);
mongoose.connect("mongodb+srv://admin:cNh0wG24ydyM6i1R@cluster0.9sfok.mongodb.net/?retryWrites=true&w=majority"
).then(()=>app.listen(8888)).then(()=>console.log("connected to database"))
.catch((err)=>console.log(err));
//shivansh gupta