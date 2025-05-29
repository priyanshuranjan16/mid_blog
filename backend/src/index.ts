import { Hono } from 'hono'
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';



// This is done to inject environment variables in any request without getting errors.
const app = new Hono<{
  Bindings: {
    DATABASE_URL : string,
    JWT_SECRET : string,
  }
}>();

app.get('/', (c) => {
  return c.text('API is working. Use /api/v1/signup to register.');
});


app.route("api/v1/user", userRouter);
app.route("api/v1/blog", blogRouter);


export default app





