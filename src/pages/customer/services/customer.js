import request from '../../../utils/request'
import { IP, PAGE_SIZE } from '../../../constants'

export function salesContractFetch({page, find_str}) {
  let formData = new FormData()
  formData.append('page', page)
  formData.append('limit', PAGE_SIZE)
  formData.append('find_str', find_str)
  return request(`${IP}/home/customer/sales-contract-list`, {
    method: 'POST',
    body: formData
  })
}

export function salesDetailFetch({page, find_str, stime, etime}) {
  let formData = new FormData()
  formData.append('page', page)
  formData.append('limit', PAGE_SIZE)
  formData.append('find_str', find_str)
  formData.append('start_date', stime ? stime.format('YYYY-MM-DD') : '')
  formData.append('end_date', etime ? etime.format('YYYY-MM-DD') : '')
  return request(`${IP}/home/customer/sales-performance`, {
    method: 'POST',
    body: formData
  })
}

export function fetchOptions() {
  return request(`${IP}/home/select/customer`, {
    method: 'POST'
  })
}

export function fetchGoods() {
  return request(`${IP}/home/select/goods`, {
    method: 'POST'
  })
}

export function addCustomerContract({id, stime, etime}) {
  let formData = new FormData()
  formData.append('customer_id', id)
  formData.append('start_date', stime)
  formData.append('end_date', etime)
  return request(`${IP}/home/customer/add-contract`, {
    method: 'POST',
    body: formData
  })
}

export function fetchCompany() {
  return request(`${IP}/home/company/company-info`, {
    method: 'POST'
  })
}

export function getBalanceData({page, find_str, stime, etime, conversion}) {
  let formData = new FormData()
  formData.append('page', page)
  formData.append('limit', PAGE_SIZE)
  formData.append('find_str', find_str)
  if (conversion) {
    formData.append('start_date', stime)
    formData.append('end_date', etime)
  } else {
    formData.append('start_date', stime ? stime.format('YYYY-MM-DD') : '')
    formData.append('end_date', etime ? etime.format('YYYY-MM-DD') : '')
  }
  return request(`${IP}/home/customer/customer-account`, {
    method: 'POST',
    body: formData
  })
}


export function balanceDetailedFetch({page, find_str, stime, etime, conversion, id}) {
  let formData = new FormData()
  formData.append('page', page)
  formData.append('limit', PAGE_SIZE)
  formData.append('find_str', find_str)
  formData.append('id', id)
  if (conversion) {
    formData.append('stime', stime)
    formData.append('etime', etime)
  } else {
    formData.append('stime', stime ? stime.format('YYYY-MM-DD') : '')
    formData.append('etime', etime ? etime.format('YYYY-MM-DD') : '')
  }
  return request(`${IP}/home/customer/customer-account-detailed`, {
    method: 'POST',
    body: formData
  })
}

export function getCustomerCompany() {
  return request(`${IP}/home/select/customer`, {
    method: 'POST'
  })
}

export function accountNum({find_str, stime, etime}) {
  let formData = new FormData()
  formData.append('id', find_str)
  formData.append('start_date', stime ? stime.format('YYYY-MM-DD') : '')
  formData.append('end_date', etime ? etime.format('YYYY-MM-DD') : '')
  return request(`${IP}/home/customer/customer-account-num`, {
    method: 'POST',
    body: formData
  })
}

export function getBalanceHistoryData({page, find_str, stime, etime}) {
  let formData = new FormData()
  formData.append('page', page)
  formData.append('limit', PAGE_SIZE)
  formData.append('find_str', find_str)
  // formData.append('stime', stime ? stime.format('YYYY-MM-DD') : '')
  // formData.append('etime', etime ? etime.format('YYYY-MM-DD') : '')
  return request(`${IP}/home/customer/customer-account-log`, {
    method: 'POST',
    body: formData
  })
}

export function confirmAccount({id}) {
  let formData = new FormData()
  formData.append('id', id)
  return request(`${IP}/home/customer/confirm-customer-account`, {
    method: 'POST',
    body: formData
  })
}

export function deleteAccount({id}) {
  let formData = new FormData()
  formData.append('id', id)
  return request(`${IP}/home/customer/delete-customer-account`, {
    method: 'POST',
    body: formData
  })
}
