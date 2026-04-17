import { RouterProvider } from "react-router";
import { router } from "./app.routes.jsx";
import { AuthProvider } from "./features/auth/auth.context.jsx";
import { InterviewProveder } from "./features/interview/interview.context.jsx";

function App() {
  return (
    <AuthProvider>
      <InterviewProveder>
        <RouterProvider router={router} />
      </InterviewProveder>
    </AuthProvider>
  );
}

export default App;
