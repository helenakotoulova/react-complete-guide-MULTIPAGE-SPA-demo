import { Link, Outlet } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Link to="new-user">New User</Link>
      <Outlet />
    </section>
  );
};

export default Welcome;

/*
VERZE 6:
Takhle to jde taky:
<Routes>
        <Route path="new-user" element={<p>Welcome, new user!</p>} />
</Routes>

ALE TED TO MUZEME HODIT DO TE APP KOMPONENTY.
Akorat pak jeste musime pridat Outlet komponentu, aby React vedel, kde to pak ma vyrenderovat - je to jen takovy placeholder.
*/
