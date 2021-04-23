import { http } from "./http";
import './websocket/client';

http.listen(3333, () => {
  console.log('🔥 Running at http://localhost:3333');
});
