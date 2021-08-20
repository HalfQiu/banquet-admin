import {
  BanquetTypeParams,
  RoomTypeParams,
  RoomParams,
  BanquetParams,
  MenuParams,
  BanquetTypeListGetResultModel,
  RoomTypeListGetResultModel,
  RoomListGetResultModel,
  BanquetListGetResultModel,
  MenuListGetResultModel,
} from './model/banquet';
import { defHttp } from '/@/utils/http/axios';
import { useGlobSetting } from '/@/hooks/setting';

const { devUrl } = useGlobSetting();

enum Api {
  GetBanquetTypeList = '/dic/findDic',
  AddBanquetType = '/dic/add',
  UpdateBanquetType = '/dic/update',
  DeleteBanquetType = '/dic/delete',

  GetRoomTypeList = '/dic/findDic',
  AddRoomType = '/dic/add',
  UpdateRoomType = '/dic/update',
  DeleteRoomType = '/dic/delete',

  GetRoomList = '/banquet/findRooms',
  AddRoom = '/banquet/addRoom',
  // UpdateRoom = '/dic/update',
  DeleteRoom = '/chat/delete',

  GetBanquetList = '/banquet/findRoomSchedules',
  AddBanquet = '/banquet/addSchedule',
  // UpdateBanquet = '/dic/update',
  DeleteBanquet = '/banquet/deleteSchedule',

  GetMenuList = '/system/getMenuList',
}

export const getBanquetTypeList = (params: BanquetTypeParams) =>
  defHttp.get<BanquetTypeListGetResultModel>(
    {
      url: Api.GetBanquetTypeList,
      params: { ...params, parentId: '402881847b2c2d77017b2c2e67180002' },
    },
    { devUrl }
  );

export const addBanquetType = (params?: BanquetTypeParams) =>
  defHttp.post<BanquetTypeListGetResultModel>(
    {
      url: Api.AddBanquetType,
      params: { ...params, parentId: '402881847b2c2d77017b2c2e67180002' },
    },
    { devUrl }
  );

export const updateBanquetType = (params?: BanquetTypeParams) =>
  defHttp.post<BanquetTypeListGetResultModel>(
    {
      url: Api.UpdateBanquetType,
      params: { ...params, parentId: '402881847b2c2d77017b2c2e67180002' },
    },
    { devUrl }
  );

export const deleteBanquetType = (params?: { id: string }) =>
  defHttp.post<BanquetTypeListGetResultModel>(
    {
      url: Api.DeleteBanquetType,
      params: { ...params, parentId: '402881847b2c2d77017b2c2e67180002' },
    },
    { devUrl }
  );

export const getRoomTypeList = (params: RoomTypeParams) =>
  defHttp.get<RoomTypeListGetResultModel>(
    {
      url: Api.GetRoomTypeList,
      params: { ...params, parentId: '402881847b2c2d77017b2c2edf340004' },
    },
    { devUrl }
  );

export const addRoomType = (params?: RoomTypeParams) =>
  defHttp.post<RoomTypeListGetResultModel>(
    {
      url: Api.AddRoomType,
      params: { ...params, parentId: '402881847b2c2d77017b2c2edf340004' },
    },
    { devUrl }
  );

export const updateRoomType = (params?: RoomTypeParams) =>
  defHttp.post<RoomTypeListGetResultModel>(
    {
      url: Api.UpdateRoomType,
      params: { ...params, parentId: '402881847b2c2d77017b2c2edf340004' },
    },
    { devUrl }
  );

export const deleteRoomType = (params?: { id: string }) =>
  defHttp.post<RoomTypeListGetResultModel>(
    {
      url: Api.DeleteRoomType,
      params: { ...params, parentId: '402881847b2c2d77017b2c2edf340004' },
    },
    { devUrl }
  );

export const getMenuList = (params?: MenuParams) =>
  defHttp.get<MenuListGetResultModel>({ url: Api.GetMenuList, params });

export const getRoomList = (params?: RoomParams) =>
  defHttp.get<RoomListGetResultModel>({ url: Api.GetRoomList, params }, { devUrl });

export const addRoom = (params?: RoomParams) =>
  defHttp.post<RoomListGetResultModel>({ url: Api.AddRoom, params }, { devUrl });

// export const updateRoom = (params?: RoomParams) =>
//   defHttp.post<RoomListGetResultModel>({ url: Api.UpdateRoom, params }, { devUrl });

export const deleteRoom = (params?: { id: string }) =>
  defHttp.post<RoomListGetResultModel>({ url: Api.DeleteRoom, params }, { devUrl });

export const getBanquetList = (params?: BanquetParams) =>
  defHttp.get<BanquetListGetResultModel>({ url: Api.GetBanquetList, params }, { devUrl });

export const addBanquet = (params?: BanquetParams) =>
  defHttp.post<BanquetListGetResultModel>({ url: Api.AddBanquet, params }, { devUrl });

// export const updateBanquet = (params?: BanquetParams) =>
//   defHttp.post<BanquetListGetResultModel>({ url: Api.UpdateBanquet, params }, { devUrl });

export const deleteBanquet = (params?: { id: string }) =>
  defHttp.post<BanquetListGetResultModel>({ url: Api.DeleteBanquet, params }, { devUrl });
