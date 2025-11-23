import { getUser } from "@/app/actions";
import { notFound } from "next/navigation";
import PageTitleComponent from "@/components/page-title/page-title";

export default async function UserPage(props: PageProps<"/user/[userid]">) {
  const { userid } = await props.params;
  const user = await getUser(userid);

  if (user === undefined) notFound();

  return (
    <>
      <PageTitleComponent>{user.name}&#39;s profile</PageTitleComponent>
      <ul>
        <li>Age: {user.age}</li>
        <li>Country: {user.country}</li>
        <li>Interests: TODO</li>
        <li>ID: {user.id}</li>
      </ul>
    </>
  );
}
