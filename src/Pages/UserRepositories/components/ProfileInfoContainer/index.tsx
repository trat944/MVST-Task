import { Skeleton } from '@components/shared/Skeleton';
import { UserSpecificItem } from './UserSpecificItem';
import { useUserSpecific } from '@hooks/useUserSpecific';
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