import { useMutation, useQuery } from '@tanstack/react-query';
import API from '../../../api';
import { HomeWidget } from '../../../api/user/types';

export default function useWidgets() {
  return useQuery({
    queryKey: ['user/home/widgets'],
    queryFn: API.user.getHomeWidgets,
    refetchInterval: false,
  });
}

export function useWidgetsMutation() {
  return useMutation({
    mutationFn: (widgets: HomeWidget[]) => {
      return API.user.updateHomeWidgets(widgets);
    },
  });
}
