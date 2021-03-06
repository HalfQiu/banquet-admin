import { defHttp } from '/@/utils/http/axios';
import { useGlobSetting } from '/@/hooks/setting';

const { devUrl } = useGlobSetting();

enum Api {
  GetChannelAnalysis = '/analysis/channel',
  GetChannelCompareAnalysis = '/analysis/barDataset',

  GetSkipOrderAnalysis = '/analysis/skipOrder',
  GetGrowListAnalysis = '/analysis/growList',
  GetSalesRankList = '/analysis/findSalesMonthRankList',

  GetGoWhereAnalysis = '/analysis/goWhere',

  GetBanquetTypeDealAnalysis = '/analysis/banquetTypeDeal',
  GetBanquetTypeBookAnalysis = '/analysis/banquetTypeBook',

  GetCompleteTableAnalysis = '/analysis/completeTable',

  GetTableNumberDealAnalysis = '/analysis/tableNumberDeal',
  GetTableMoneyDealAnalysis = '/analysis/tableMoneyDeal',

  GetRoomBookAnalysis = '/analysis/roomBook',
  GetFoodBookAnalysis = '/analysis/foodBook',

  GetBanquetTypeNumBookAnalysis = '/analysis/banquetTypeNumBook',
  GetDealMoneyAnalysis = '/analysis/dealMoney',

  GetDealDiscountAnalysis = '/analysis/dealDiscount',
  GetDealDiscountPercentAnalysis = '/analysis/dealDiscountPercent',

  GetDealPercentAnalysis = '/analysis/dealPercent',
  GetInviteAnalysis = '/analysis/invite',

  GetPrefCard = '/analysis/prefCard',

  UpdateTotal = '/target/addOrUpdate',

  GetDealCountYearAnalysis = '/analysis/dealCountYear',
  GetSkipOrderYearAnalysis = '/analysis/skipOrderYear',
  GetNewCustomerYearAnalysis = '/analysis/newCustomerYear',
  GetChannelYearAnalysis = '/analysis/channelYear',
  GetDealYearAnalysis = '/analysis/dealYear',
  GetInviteYearAnalysis = '/analysis/inviteYear',

  GetBacklogNum = '/backlog/findBacklogNum',
  GetSingleSalesSignMoney = '/analysis/singleSignMoney',
}

export const getChannelAnalysis = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetChannelAnalysis,
      params,
    },
    { devUrl }
  );

export const getSingleSalesSignMoney = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetSingleSalesSignMoney,
      params,
    },
    { devUrl }
  );

export const getPrefCard = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetPrefCard,
      params,
    },
    { devUrl }
  );

export const getBacklogNum = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetBacklogNum,
      params,
    },
    { devUrl }
  );

export const getGrowListAnalysis = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetGrowListAnalysis,
      params,
    },
    { devUrl }
  );

export const getSalesRankList = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetSalesRankList,
      params,
    },
    { devUrl }
  );

export const getSkipOrderAnalysis = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetSkipOrderAnalysis,
      params,
    },
    { devUrl }
  );

export const getGoWhereAnalysis = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetGoWhereAnalysis,
      params,
    },
    { devUrl }
  );

export const getBanquetTypeDealAnalysis = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetBanquetTypeDealAnalysis,
      params,
    },
    { devUrl }
  );

export const getBanquetTypeBookAnalysis = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetBanquetTypeBookAnalysis,
      params,
    },
    { devUrl }
  );

export const getTableNumberDealAnalysis = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetTableNumberDealAnalysis,
      params,
    },
    { devUrl }
  );

export const getTableMoneyDealAnalysis = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetTableMoneyDealAnalysis,
      params,
    },
    { devUrl }
  );

export const getRoomBookAnalysis = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetRoomBookAnalysis,
      params,
    },
    { devUrl }
  );

export const getFoodBookAnalysis = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetFoodBookAnalysis,
      params,
    },
    { devUrl }
  );

export const getBanquetTypeNumBookAnalysis = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetBanquetTypeNumBookAnalysis,
      params,
    },
    { devUrl }
  );

export const getDealMoneyAnalysis = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetDealMoneyAnalysis,
      params,
    },
    { devUrl }
  );

export const getDealDiscountAnalysis = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetDealDiscountAnalysis,
      params,
    },
    { devUrl }
  );

export const getDealDiscountPercentAnalysis = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetDealDiscountPercentAnalysis,
      params,
    },
    { devUrl }
  );

export const getDealPercentAnalysis = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetDealPercentAnalysis,
      params,
    },
    { devUrl }
  );

export const getInviteAnalysis = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetInviteAnalysis,
      params,
    },
    { devUrl }
  );

export const getChannelCompareAnalysis = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetChannelCompareAnalysis,
      params,
    }
    // { devUrl }
  );

export const getCompleteTableAnalysis = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetCompleteTableAnalysis,
      params,
    },
    { devUrl }
  );

export const updateTotal = (params?: any) =>
  defHttp.post(
    {
      url: Api.UpdateTotal,
      params,
    },
    { devUrl }
  );

export const getDealCountYearAnalysis = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetDealCountYearAnalysis,
      params,
    },
    { devUrl }
  );

export const getSkipOrderYearAnalysis = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetSkipOrderYearAnalysis,
      params,
    },
    { devUrl }
  );

export const getNewCustomerYearAnalysis = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetNewCustomerYearAnalysis,
      params,
    },
    { devUrl }
  );

export const getChannelYearAnalysis = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetChannelYearAnalysis,
      params,
    },
    { devUrl }
  );

export const getDealYearAnalysis = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetDealYearAnalysis,
      params,
    },
    { devUrl }
  );

export const getInviteYearAnalysis = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetInviteYearAnalysis,
      params,
    },
    { devUrl }
  );
