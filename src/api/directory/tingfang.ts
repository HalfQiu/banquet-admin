import {
  DirectoryParams,
  DirectoryPageParams,
  DirectoryPageListGetResultModel,
  DirectoryListGetResultModel,
  MenuParams,
  MenuListGetResultModel,
} from './model/directoryModel';
import { defHttp } from '/@/utils/http/axios';
import { useGlobSetting } from '/@/hooks/setting';

const { devUrl } = useGlobSetting();

enum Api {
  DirectoryPageList = '/dic/findDic',
  GetAllDirectoryList = '/system/getAllDirectoryList',
  AddDirectory = '/dic/add',
  UpdateDirectory = '/dic/update',
  DeleteDirectory = '/dic/delete',
  MenuList = '/system/getMenuList',
  setDirectoryStatus = '/system/setRoleStatus',
}

export const getTingfangListByPage = (params?: DirectoryPageParams) =>
  defHttp.get<DirectoryPageListGetResultModel>(
    {
      url: Api.DirectoryPageList,
      params: { ...params, parentId: '402881847b2c2d77017b2c2edf340004' },
    },
    { devUrl }
  );

export const getAllTingfangList = (params?: DirectoryParams) =>
  defHttp.get<DirectoryListGetResultModel>({
    url: Api.GetAllDirectoryList,
    params: { ...params, parentId: '402881847b2c2d77017b2c2edf340004' },
  });

export const addTingfang = (params?: DirectoryParams) =>
  defHttp.post<DirectoryListGetResultModel>(
    { url: Api.AddDirectory, params: { ...params, parentId: '402881847b2c2d77017b2c2edf340004' } },
    { devUrl }
  );

export const updateTingfang = (params?: DirectoryParams) =>
  defHttp.post<DirectoryListGetResultModel>(
    {
      url: Api.UpdateDirectory,
      params: { ...params, parentId: '402881847b2c2d77017b2c2edf340004' },
    },
    { devUrl }
  );

export const deleteTingfang = (params?: { dicId: string }) =>
  defHttp.post<DirectoryListGetResultModel>(
    {
      url: Api.DeleteDirectory,
      params: { ...params, parentId: '402881847b2c2d77017b2c2edf340004' },
    },
    { devUrl }
  );

export const setTingfangStatus = (id: number, status: string) =>
  defHttp.post({ url: Api.setDirectoryStatus, params: { id, status } });

export const getMenuList = (params?: MenuParams) =>
  defHttp.get<MenuListGetResultModel>({ url: Api.MenuList, params });
