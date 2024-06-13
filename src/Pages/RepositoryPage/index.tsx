import { useParams } from "react-router-dom";
import { useUserSpecific } from "../../hooks/useUserSpecific";
import { useEffect } from "react";

export const RepositoryPage = () => {
  const { name } = useParams<{ name: string }>();
  const { user, loading } = useUserSpecific(name || '');
  console.log(user)

  return (
    <div>index</div>
  )
}