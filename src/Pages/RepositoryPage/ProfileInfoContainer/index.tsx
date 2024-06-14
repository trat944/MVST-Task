import { Skeleton } from '../../../components/Skeleton';
import { useUserSpecific } from '../../../hooks/useUserSpecific';
import { UserSpecificItem } from './UserSpecificItem';
import './profileInfoContainer.css'

type Props = {
  name: string | undefined
}

export const ProfileInfoContainer = ({name}: Props) => {

  const { user, loading } = useUserSpecific(name || '');

  return (
    <>
      {loading ? (
          <Skeleton />
        ) : (
          <UserSpecificItem user={user} />
        )}
    </>
  )
}