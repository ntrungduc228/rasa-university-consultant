# This files contains your custom actions which can be used to run
# custom Python code.
#
# See this guide on how to implement these action:
# https://rasa.com/docs/rasa/custom-actions


# This is a simple example for a custom action which utters "Hello World!"

from typing import Any, Text, Dict, List

from rasa_sdk import Action, FormValidationAction, Tracker
from rasa_sdk.executor import CollectingDispatcher
from rasa_sdk.types import DomainDict
from rasa_sdk.events import SlotSet, AllSlotsReset,UserUttered,FollowupAction
import json

coso_data = ["chung","bac","nam"]
nganh_data = ["cntt", "ktdtvt", "ktddt", "attt", "ktdkvtdh", "iot", "cndpt", "qtkd", "mkt", "kt"]
coso_default = "chung"
namhoc_data = ["2023", "2022", "2021", "2020", "2019"]
namhoc_default = "chung"
thongtinphu_default ="chung"
nganh_tq="tong_quan"
none_coso_namhoc="chung"

'''
    slot: thongtinchinh, thongtinphu, coso, namhoc
          flag

    thongtinchinh-thongtinphu
    thongtinchinh-thongtinphu-namhoc
    thongtinchinh-thongtinphu-coso
    thongtinchinh-thongtinphu-coso-namhoc
    flag-coso           ex: the con co so phia bac
    flag-thongtinphu    ex: the con chuyen nganh
    flag-namhoc         ex: em cung muon hoi them nam 2022
    flag-coso-namhoc    ex: em cung muon biet co so phia nam nam 2021
'''

tmp_thongtinchinh = ''
tmp_thongtinphu = ''
tmp_coso = ''
tmp_namhoc = ''

def reset_tmp_val():
    print('resetting temp val\n')
    global tmp_thongtinchinh 
    global tmp_thongtinphu 
    global tmp_coso 
    global tmp_namhoc 
    tmp_thongtinchinh = ''
    tmp_thongtinphu = ''
    tmp_coso = ''
    tmp_namhoc = ''

def set_tmp_val(thongtinchinh, thongtinphu, coso, namhoc):
    print('setting new temp val\n')

    global tmp_thongtinchinh 
    global tmp_thongtinphu 
    global tmp_coso 
    global tmp_namhoc 

    tmp_thongtinchinh = thongtinchinh
    tmp_thongtinphu = thongtinphu
    tmp_coso = coso
    tmp_namhoc = namhoc

def print_tmp_val():
    global tmp_thongtinchinh 
    global tmp_thongtinphu 
    global tmp_coso 
    global tmp_namhoc 
    print('======================================================================\n')
    print(f'thongtin tmp: {tmp_thongtinchinh} - {tmp_thongtinphu} - {tmp_coso} - {tmp_namhoc}')

class ActionTimThongtinchinhThongtinphu(Action):
    def name(self):
        return "action_ttchinh_ttphu"
    def run(self, dispatcher, tracker, domain):
        thongtinchinh = tracker.get_slot("thongtinchinh")
        thongtinphu = tracker.get_slot("thongtinphu")
        flag = tracker.get_slot("flag")
        isFlag = False
        isNganh = False
        print_tmp_val()
        # [UserUttered(text="/utter_hoi_chuc_nang")]
        if flag is not None:
            isFlag = True

        

        print(f'action_chinh_phu -> thongtinchinh: {thongtinchinh} -  thongtinphu: {thongtinphu} - flag: {flag} \n')
        print(f'Flag_IsNganh -> Flag: {isFlag} -  IsNganh: {isNganh} \n')

        ### Now handle process    

        if isFlag == True:
            print("flag\n")
            f = open('./data/collections/data_collect.json', encoding="utf8")
            data = json.load(f)

            if tmp_thongtinchinh is None or tmp_thongtinchinh == '':
                dispatcher.utter_message(text=f'Bot vẫn chưa hiểu rõ ý định chính của bạn')
                return [AllSlotsReset(),FollowupAction("utter_hoi_chuc_nang")]

            if thongtinphu is None:
                thongtinphu = thongtinphu_default

            if tmp_thongtinchinh in nganh_data:
                isNganh = True
            

            if isNganh == True:
                if thongtinphu not in data["nganh"][tmp_thongtinchinh]:
                    dispatcher.utter_message(text=f'bot chua co thong tin')
                else:
                    if thongtinphu != thongtinphu_default:
                        dispatcher.utter_message(text=f'{data["nganh"][tmp_thongtinchinh][thongtinphu][none_coso_namhoc]}')
                    else:
                        dispatcher.utter_message(text=f'{data["nganh"][tmp_thongtinchinh][thongtinphu]}')

            else:
                if thongtinphu not in data[tmp_thongtinchinh]:
                    dispatcher.utter_message(text=f'bot chua co thong tin')
                else:
                    dispatcher.utter_message(text=f'{data[tmp_thongtinchinh][thongtinphu]}')

            set_tmp_val(tmp_thongtinchinh, thongtinphu, '', '')
            print_tmp_val()
            return [AllSlotsReset()]
        else:
            f = open('./data/collections/data_collect.json', encoding="utf8")
            data = json.load(f)

            if thongtinchinh is None:
                return [FollowupAction("utter_hoi_chuc_nang")]

            if thongtinphu is None:
                thongtinphu = thongtinphu_default

            if thongtinchinh in nganh_data:
                isNganh = True
            

            if isNganh == True:
                if thongtinphu not in data["nganh"][thongtinchinh]:
                    dispatcher.utter_message(text=f'bot chua co thong tin')
                else:
                    if thongtinphu != thongtinphu_default:
                        dispatcher.utter_message(text=f'{data["nganh"][thongtinchinh][thongtinphu][none_coso_namhoc]}')
                    else:
                        dispatcher.utter_message(text=f'{data["nganh"][thongtinchinh][thongtinphu]}')

            else:
                if thongtinphu not in data[thongtinchinh]:
                    dispatcher.utter_message(text=f'bot chua co thong tin')
                else:
                    dispatcher.utter_message(text=f'{data[thongtinchinh][thongtinphu]}')

    
        set_tmp_val(thongtinchinh, thongtinphu, '', '')
        print_tmp_val()
        return [AllSlotsReset()]


class ActionThongtinchinhThongtinphuCoso(Action):
    def name(self):
        return "action_ttchinh_ttphu_coso"
    def run(self, dispatcher, tracker, domain):
        thongtinchinh = tracker.get_slot("thongtinchinh")
        thongtinphu = tracker.get_slot("thongtinphu")
        coso = tracker.get_slot("coso")
        flag = tracker.get_slot("flag")
        isFlag = False
        isNganh = False
        print_tmp_val()
        # [UserUttered(text="/utter_hoi_chuc_nang")]
        if flag is not None:
            isFlag = True

        

        print(f'action_ttchinh_ttphu_coso -> thongtinchinh: {thongtinchinh} -  thongtinphu: {thongtinphu} - coso: {coso} - flag: {flag}  \n')
       

        if isFlag == True:
            print("flag\n")
            f = open('./data/collections/data_collect.json', encoding="utf8")
            data = json.load(f)

            if tmp_thongtinchinh is None or tmp_thongtinchinh == '':
                dispatcher.utter_message(text=f'Bot vẫn chưa hiểu rõ ý định chính của bạn')
                return [AllSlotsReset(), FollowupAction("utter_hoi_chuc_nang")]

            global tmp_thongtinphu
            if tmp_thongtinphu is None:
                tmp_thongtinphu = thongtinphu_default

            if coso is None:
                coso = coso_default

            if tmp_thongtinchinh in nganh_data:
                isNganh = True

            print(f'Flag_IsNganh -> Flag: {isFlag} -  IsNganh: {isNganh} \n')
            '''
                nganh
                    data["nganh"][thongtinchinh][thongtinphu][coso]
                ko nganh
                    data[thongtinchinh][thongtinphu][coso]
            '''

            if isNganh == True:
                if tmp_thongtinphu not in data["nganh"][tmp_thongtinchinh]:
                    dispatcher.utter_message(text=f'bot chua co thong tin')
                else:
                    if coso not in data["nganh"][tmp_thongtinchinh][tmp_thongtinphu]:
                        dispatcher.utter_message(text=f'bot chua co thong tin')
                    else:
                        dispatcher.utter_message(text=f'{data["nganh"][tmp_thongtinchinh][tmp_thongtinphu][coso][none_coso_namhoc]}')

            else:
                if data[tmp_thongtinchinh] and tmp_thongtinphu not in data[tmp_thongtinchinh]:
                    dispatcher.utter_message(text=f'bot chua co thong tin')
                else:
                    dispatcher.utter_message(text=f'{data[tmp_thongtinchinh][tmp_thongtinphu]}')
            
            set_tmp_val(tmp_thongtinchinh, tmp_thongtinphu, coso, '')
            print_tmp_val()
            return [AllSlotsReset()]
        else:
            f = open('./data/collections/data_collect.json', encoding="utf8")
            data = json.load(f)

            if thongtinchinh is None:
                return [AllSlotsReset(),FollowupAction("utter_hoi_chuc_nang")]


            if thongtinphu is None:
                thongtinphu = thongtinphu_default

            if coso is None:
                coso = coso_default

            if thongtinchinh in nganh_data:
                isNganh = True
            
            print(f'Flag_IsNganh -> Flag: {isFlag} -  IsNganh: {isNganh} \n')
            '''
                nganh
                    data["nganh"][thongtinchinh][thongtinphu][coso]
                ko nganh
                    data[thongtinchinh][thongtinphu][coso]
            '''

            if isNganh == True:
                if thongtinphu not in data["nganh"][thongtinchinh]:
                    dispatcher.utter_message(text=f'bot chua co thong tin')
                else:
                    if coso not in data["nganh"][thongtinchinh][thongtinphu]:
                        dispatcher.utter_message(text=f'bot chua co thong tin')
                    else:
                        dispatcher.utter_message(text=f'{data["nganh"][thongtinchinh][thongtinphu][coso][none_coso_namhoc]}')

            else:
                if thongtinphu not in data[thongtinchinh]:
                    dispatcher.utter_message(text=f'bot chua co thong tin')
                else:
                    dispatcher.utter_message(text=f'{data[thongtinchinh][thongtinphu]}')

        set_tmp_val(thongtinchinh, thongtinphu, coso, '')
        print_tmp_val()
        return [AllSlotsReset()]


class ActionThongtinchinhThongtinphuNamhoc(Action):
    def name(self):
        return "action_ttchinh_ttphu_namhoc"
    def run(self, dispatcher, tracker, domain):
        thongtinchinh = tracker.get_slot("thongtinchinh")
        thongtinphu = tracker.get_slot("thongtinphu")
        namhoc = tracker.get_slot("namhoc")
        flag = tracker.get_slot("flag")

        isFlag = False
        isNganh = False
        print_tmp_val()
        # [UserUttered(text="/utter_hoi_chuc_nang")]
        if flag is not None:
            isFlag = True

       

        print(f'action_ttchinh_ttphu_namhoc -> thongtinchinh: {thongtinchinh} -  thongtinphu: {thongtinphu} - namhoc: {namhoc} - flag: {flag}  \n')
       

        if isFlag == True:
            f = open('./data/collections/data_collect.json', encoding="utf8")
            data = json.load(f)

            if tmp_thongtinchinh is None or tmp_thongtinchinh == '':
                dispatcher.utter_message(text=f'Bot vẫn chưa hiểu rõ ý định chính của bạn')
                return [AllSlotsReset(),FollowupAction("utter_hoi_chuc_nang")]


            global tmp_thongtinphu
            if tmp_thongtinphu is None:
                tmp_thongtinphu = thongtinphu_default

            if namhoc is None:
                namhoc = coso_default

            if tmp_thongtinchinh in nganh_data:
                isNganh = True
             
            print(f'Flag_IsNganh -> Flag: {isFlag} -  IsNganh: {isNganh} \n')

            if isNganh == True:
                if tmp_thongtinphu not in data["nganh"][tmp_thongtinchinh]:
                    dispatcher.utter_message(text=f'bot chua co thong tin')
                else:
                    if namhoc not in data["nganh"][tmp_thongtinchinh][tmp_thongtinphu]:
                        dispatcher.utter_message(text=f'bot chua co thong tin')
                    else:
                        dispatcher.utter_message(text=f'{data["nganh"][tmp_thongtinchinh][tmp_thongtinphu][namhoc][none_coso_namhoc]}')

            else:
                if data[tmp_thongtinchinh] and tmp_thongtinphu not in data[tmp_thongtinchinh]:
                    dispatcher.utter_message(text=f'bot chua co thong tin')
                else:
                    dispatcher.utter_message(text=f'{data[tmp_thongtinchinh][tmp_thongtinphu]}')
            
            set_tmp_val(tmp_thongtinchinh, tmp_thongtinphu, '', namhoc)
            print_tmp_val()
            return [AllSlotsReset()]
        else:
            f = open('./data/collections/data_collect.json', encoding="utf8")
            data = json.load(f)

            if thongtinchinh is None:
                return [FollowupAction("utter_hoi_chuc_nang")]

            if thongtinphu is None:
                thongtinphu = thongtinphu_default

            if namhoc is None:
                namhoc = coso_default

            if thongtinchinh in nganh_data:
                isNganh = True

            
            print(f'Flag_IsNganh -> Flag: {isFlag} -  IsNganh: {isNganh} \n')

            '''
                nganh
                    data["nganh"][thongtinchinh][thongtinphu][namhoc]
                ko nganh
                    data[thongtinchinh][thongtinphu][namhoc]
            '''

            if isNganh == True:
                if thongtinphu not in data["nganh"][thongtinchinh]:
                    dispatcher.utter_message(text=f'bot chua co thong tin')
                else:
                    if namhoc not in data["nganh"][thongtinchinh][thongtinphu]:
                        dispatcher.utter_message(text=f'bot chua co thong tin')
                    else:
                        dispatcher.utter_message(text=f'{data["nganh"][thongtinchinh][thongtinphu][namhoc][none_coso_namhoc]}')

            else:
                if thongtinphu not in data[thongtinchinh]:
                    dispatcher.utter_message(text=f'bot chua co thong tin')
                else:
                    dispatcher.utter_message(text=f'{data[thongtinchinh][thongtinphu]}')

        set_tmp_val(thongtinchinh, thongtinphu, '', namhoc)
        print_tmp_val()
        return [AllSlotsReset()]


class ActionThongtinchinhThongtinphuCosoNamhoc(Action):
    def name(self):
        return "action_ttchinh_ttphu_cosonamhoc"
    def run(self, dispatcher, tracker, domain):
        thongtinchinh = tracker.get_slot("thongtinchinh")
        thongtinphu = tracker.get_slot("thongtinphu")
        namhoc = tracker.get_slot("namhoc")
        coso = tracker.get_slot("coso")
        isFlag = False
        isNganh = False
        print_tmp_val()
        # [UserUttered(text="/utter_hoi_chuc_nang")]


        if thongtinchinh is None:
            return [AllSlotsReset(),FollowupAction("utter_hoi_chuc_nang")]


        if thongtinphu is None:
            thongtinphu = thongtinphu_default

        if namhoc is None:
            namhoc = coso_default

        if coso is None:
            coso = coso_default

        if thongtinchinh in nganh_data:
            isNganh = True

        print(f'action_ttchinh_ttphu_namhoc -> thongtinchinh: {thongtinchinh} -  thongtinphu: {thongtinphu} - namhoc: {namhoc}  - coso: {coso}\n')
        print(f'Flag_IsNganh -> Flag: {isFlag} -  IsNganh: {isNganh} \n')
       

        if isFlag == True:
            
            return [AllSlotsReset()]
        else:
            f = open('./data/collections/data_collect.json', encoding="utf8")
            data = json.load(f)
            
            '''
                nganh
                    data["nganh"][thongtinchinh][thongtinphu][namhoc][coso]
                    data["nganh"][thongtinchinh][thongtinphu][coso][namhoc]
                ko nganh
                    data[thongtinchinh][thongtinphu][namhoc][coso]
                    data[thongtinchinh][thongtinphu][coso][namhoc]
            '''

            if coso == coso_default and namhoc == coso_default:
                if isNganh == True:
                    if thongtinphu not in data["nganh"][thongtinchinh]:
                        dispatcher.utter_message(text=f'bot chua co thong tin')
                    else:
                        dispatcher.utter_message(text=f'{data["nganh"][thongtinchinh][thongtinphu][none_coso_namhoc]}')

                else:
                    if thongtinphu not in data[thongtinchinh]:
                        dispatcher.utter_message(text=f'bot chua co thong tin')
                    else:
                        dispatcher.utter_message(text=f'{data[thongtinchinh][thongtinphu]}')


                set_tmp_val(thongtinchinh, thongtinphu, coso, namhoc)
                print_tmp_val()
                return [AllSlotsReset()]
            
            if isNganh == True:
                if thongtinphu not in data["nganh"][thongtinchinh]:
                    dispatcher.utter_message(text=f'bot chua co thong tin')
                else:
                    if namhoc not in data["nganh"][thongtinchinh][thongtinphu]:
                        dispatcher.utter_message(text=f'bot chua co thong tin')
                    else:
                        dispatcher.utter_message(text=f'{data["nganh"][thongtinchinh][thongtinphu][namhoc][none_coso_namhoc]}')

            else:
                if thongtinphu not in data[thongtinchinh]:
                    dispatcher.utter_message(text=f'bot chua co thong tin')
                else:
                    dispatcher.utter_message(text=f'{data[thongtinchinh][thongtinphu]}')

        set_tmp_val(thongtinchinh, thongtinphu, coso, namhoc)
        print_tmp_val()
        return [AllSlotsReset()]


#### ======================================================== ####

'''
    - [thongtinchinh][coso_default]
    format:
    "thongtinchinh": {
        "coso_default" : "data"
    }

     - [thongtinchinh][thongtinphu]
    format:
    "thongtinchinh": {
        "thongtinphu" : "data"
    }

    - [“nganh"][thongtinchinh][thongtinphu][coso]
    format: 
    "nganh": {
        "thongtinchinh": {
            "thongtinphu": {
                "coso": "data"
            }
        }
    }

    - [“nganh”][thongtinchinh][thongtinphu][coso_default]
    format: 
    "nganh": {
        "thongtinchinh": {
           "thongtinphu": {
                "coso_default": "data"
            }
        }
    }

    - [thongtinchinh][thongtinphu][namhoc]
    format:
      "thongtinchinh": {
           "thongtinphu": {
                "namhoc": "data"
            }
        }

    - ["nganh"][thongtinchinh][thongtinphu][coso][namhoc]
    format:
    "nganh": {
         "thongtinchinh": {
           "thongtinphu": {
                "coso": {
                    "namhoc": "data"
                }
            }
        }
    }

'''
# thongtinchinh_data  = [""]
# thongtinphu_data = [""]
coso_data = ["chung","bac","nam"]
nganh_data = ["cntt", "ktdtvt", "ktddt", "attt", "ktdkvtdh", "iot", "cndpt", "qtkd", "mkt", "kt"]
coso_default = "chung"
namhoc_data = ["2023", "2022", "2021", "2020", "2019"]
namhoc_default = "chung"
thongtinphu_default ="chung"
nganh_tq="tong_quan"

def get_thong_tin_nganh(nganh, thongtinphu, coso):
    f = open('./data/collections/data_collect.json', encoding="utf8")
    data = json.load(f)
    data_return = f"Khong tim thay data {thongtinphu}"
    if coso is None:
        coso = coso_default
    if data["nganh"][nganh][thongtinphu]:
        if data["nganh"][nganh][thongtinphu][coso]:
            data_return = data["nganh"][nganh][thongtinphu][coso]
        else:
            data_return = data["nganh"][nganh][thongtinphu][coso_default]

    
    return data_return

#### [thongtinchinh][coso_default]
class ActionTruyVanThongtinchinh(Action):
    def name(self):
        return "action_truyvan_thongtinchinh"
    def run(self, dispatcher, tracker, domain):
        thongtinchinh = tracker.get_slot("thongtinchinh")
        # [UserUttered(text="/utter_hoi_chuc_nang")]
        print(f'action_truyvan_thongtinchinh: {thongtinchinh} \n')


        if thongtinchinh is None:
            return [FollowupAction("utter_hoi_chuc_nang")]
        else:
            f = open('./data/collections/data_collect.json', encoding="utf8")
            data = json.load(f)
            if thongtinchinh in data:
                dispatcher.utter_message(text=f'{data[thongtinchinh][coso_default]}')
                return []
            else:
                dispatcher.utter_message(text=f'Bot chưa có dữ liệu')

        return []

#### [thongtinchinh][thongtinphu]
class ActionTruyVanThongtinchinhThongThongTinPhu(Action):
    def name(self):
        return "action_truyvan_thongtinchinh_thongtinphu"
    def run(self, dispatcher, tracker, domain):
        thongtinchinh = tracker.get_slot("thongtinchinh")
        thongtinphu = tracker.get_slot("thongtinphu")
        print(f'action_truyvan_thongtinchinh_thongtinphu: {thongtinchinh} - {thongtinphu} \n')


        if thongtinchinh is None:
            return [FollowupAction("utter_hoi_chuc_nang")]
        else:
            f = open('./data/collections/data_collect.json', encoding="utf8")
            data = json.load(f)
            if thongtinchinh in data:
                if thongtinphu is None:
                    if thongtinchinh in data:
                        dispatcher.utter_message(text=f'{data[thongtinchinh][coso_default]}')
                        return []
                else:
                    if thongtinphu in data[thongtinchinh]:
                        dispatcher.utter_message(text=f'{data[thongtinchinh][thongtinphu]}')
                        return []
                    else:
                        dispatcher.utter_message(text=f'bot chưa có thông tin về vấn đề này')
                        return []

            else:
                dispatcher.utter_message(text=f'Bot chưa có dữ liệu')

        return []


#### [“nganh"][thongtinchinh][thongtinphu][coso]
class ActionTruyVanNganhThongTinPhuCoSo(Action):
    def name(self):
        return "action_truyvan_nganh_thongtinphu_coso"
    def run(self, dispatcher, tracker, domain):
        thongtinchinh = tracker.get_slot("thongtinchinh")
        thongtinphu = tracker.get_slot("thongtinphu")
        coso = tracker.get_slot("coso")
        namhoc = tracker.get_slot("namhoc")
        print(f'action_truyvan_nganh_thongtinphu_coso: {thongtinchinh} - {thongtinphu} - {coso} - {namhoc}\n')

        if thongtinchinh is None or thongtinphu is None:
            dispatcher.utter_message(text=f'xin loi toi chua hieu ban noi gi')
            return []
        if thongtinchinh not in nganh_data:
            dispatcher.utter_message(text=f'xin loi toi chua hieu ban noi gi')
            return []

        if coso is None:
            coso = coso_default
        
        if namhoc is None:
            namhoc= namhoc_default

        f = open('./data/collections/data_collect.json', encoding="utf8")
        data = json.load(f)

        if thongtinchinh not in data["nganh"]:
            dispatcher.utter_message(text=f'bot hiểu ý bạn là lấy thông tin ngành {thongtinchinh} nhưng bot chưa có dữ liệu')
            return []
            # return  [FollowupAction("utter_hoi_chuc_nang")]
            # return []

        if thongtinphu in data["nganh"][thongtinchinh]:
            if coso in data["nganh"][thongtinchinh][thongtinphu]:
                if namhoc in data["nganh"][thongtinchinh][thongtinphu][coso]:
                    dispatcher.utter_message(text=f'{data["nganh"][thongtinchinh][thongtinphu][coso][namhoc]}')
                    return []
                else:
                    dispatcher.utter_message(text=f'{data["nganh"][thongtinchinh][thongtinphu][coso]}')
                    return []
        else:
            dispatcher.utter_message(text=f'bot hiểu ý bạn là lấy thông tin ngành {thongtinchinh} nhưng bot chưa có dữ liệu')
            return []




        # dispatcher.utter_message(text=f'action_truyvan_nganh_thongtinphu_coso: {thongtinchinh} - {thongtinphu} - {coso}')
        print(f'action_truyvan_nganh_thongtinphu_coso: {thongtinchinh} - {thongtinphu} - {coso}\n')
        return []
        
#### [thongtinchinh][thongtinphu][namhoc]
class ActionTruyvanThongtinChinhThongTinPhuNamHoc(Action):
    def name(self):
        return "action_truyvan_thongtinchinh_thongtinphu_namhoc"
    def run(self, dispatcher, tracker, domain):
            # return [UserUttered(text="/my_intent", parse_data=data)]
        thongtinchinh = tracker.get_slot("thongtinchinh")
        thongtinphu = tracker.get_slot("thongtinphu")
        namhoc = tracker.get_slot("namhoc")
        print(f'action_truyvan_thongtinchinh_thongtinphu_namhoc: {thongtinchinh} - {thongtinphu}  - {namhoc}\n')
        

        if thongtinchinh is None:
            dispatcher.utter_message(text=f'xin loi toi chua hieu ban noi gi')
            return []
        if thongtinphu is None:
            thongtinphu = thongtinphu_default

        if namhoc is None:
            namhoc = namhoc_default
        
        f = open('./data/collections/data_collect.json', encoding="utf8")
        data = json.load(f)

        if thongtinchinh in data:
            if thongtinphu in data[thongtinchinh]:
                if namhoc in data[thongtinchinh][thongtinphu]:
                     dispatcher.utter_message(text=f'{data[thongtinchinh][thongtinphu][namhoc]}')
                     return []
        # else:
        #     dispatcher.utter_message(text=f'bot hiểu ý bạn là lấy thông tin ngành {thongtinchinh} nhưng bot chưa có dữ liệu')
        #     return []

        dispatcher.utter_message(text=f'Bot chưa có dữ liệu')
        return []

#### [“nganh”][thongtinchinh][thongtinphu][coso_default]
class ActionTruyVanNganhThongTinPhu(Action):
    def name(self):
        return "action_truyvan_nganh_thongtinphu"
    def run(self, dispatcher, tracker, domain):
        thongtinchinh = tracker.get_slot("thongtinchinh")
        thongtinphu = tracker.get_slot("thongtinphu")
        
        
        print(f'action_truyvan_nganh_thongtinphu: {thongtinchinh} - {thongtinphu}\n')

        if thongtinchinh is None:
            ## dispatch intent nganh
            dispatcher.utter_message(text=f'Bạn muốn biết của ngành nào')
            dispatcher.utter_message(response="utter_chon_nganh")

                # return [UserUttered(text="/utter_intent_chonthongtinphu")]
            return []
        if thongtinchinh not in nganh_data:
            dispatcher.utter_message(response="utter_chon_nganh")
            return []
        
        f = open('./data/collections/data_collect.json', encoding="utf8")
        data = json.load(f)

        if thongtinphu is None:
            if nganh_tq in data["nganh"][thongtinchinh]:
                if coso_default in data["nganh"][thongtinchinh][nganh_tq]:
                    dispatcher.utter_message(text=f'{data["nganh"][thongtinchinh][nganh_tq][coso_default]}')
                    return []
                else:
                    dispatcher.utter_message(response="utter_chon_thongtinphu")
            else:
                dispatcher.utter_message(response="utter_chon_thongtinphu")
        
            # dispatcher.utter_message(text=f'bot hiểu ý bạn là lấy thông tin ngành {thongtinchinh} nhưng bot chưa có dữ liệu')
            return []
        

        

        if thongtinchinh not in data["nganh"]:
            dispatcher.utter_message(text=f'bot hiểu ý bạn là lấy thông tin ngành {thongtinchinh} nhưng bot chưa có dữ liệu')
            return []
            # return  [FollowupAction("utter_hoi_chuc_nang")]
            # return []

        if thongtinphu in data["nganh"][thongtinchinh]:
            if coso_default in data["nganh"][thongtinchinh][thongtinphu]:
                dispatcher.utter_message(text=f'{data["nganh"][thongtinchinh][thongtinphu][coso_default]}')
                return []
            else:
                dispatcher.utter_message(text=f'bot chưa có dữ liệu, xin bạn thông cảm')
        else:
            dispatcher.utter_message(response="utter_chon_thongtinphu")
            
            # dispatcher.utter_message(text=f'bot hiểu ý bạn là lấy thông tin ngành {thongtinchinh} nhưng bot chưa có dữ liệu')
            return []

        return []

#### truy van can nganh
# class ActionTruyvanNganh(Action):
#     def name(self):
#         return "action_truyvan_nganh"
#     def run(self, dispatcher, tracker, domain):
#             # return [UserUttered(text="/my_intent", parse_data=data)]
#         nganh = tracker.get_slot("nganh")
        
#         if nganh is None:
#             dispatcher.utter_message(text=f"Bot chưa hiểu ý bạn")
#             f = open('./data/collections/data_collect.json', encoding="utf8")
#             data = json.load(f)
#             if data["chung"]["nganh_dao_tao"]["tong_quan"]:
#                 dispatcher.utter_message(text=f'{data["chung"]["nganh_dao_tao"]["tong_quan"]}')
#                 return [UserUttered(text="/nganh_dao_tao")]
#         else:    
#             thongtinphu = tracker.get_slot("thongtinphu")
#             f = open('./data/collections/data_collect.json', encoding="utf8")
#             data = json.load(f)
#             if thongtinphu is None:
#                 if data["chung"]["nganh_dao_tao"][nganh]["tong_quan"]:
#                     dispatcher.utter_message(text=f'{data["chung"]["nganh_dao_tao"][nganh]["tong_quan"]}')
#             else:
#                  if data["chung"]["nganh_dao_tao"][nganh][thongtinphu]:
#                     dispatcher.utter_message(text=f'{data["chung"]["nganh_dao_tao"][nganh][thongtinphu]}')
#                  else:
#                     return [UserUttered(text="Xin lỗi, hiện tại bot chưa hiểu ý bạn hoặc chưa có dữ liệu bạn mong muốn")]


class ActionShowSlots(Action):

   def name(self):
      return "action_show_slot"

   def run(self, dispatcher, tracker, domain):
        thongtinchinh = tracker.get_slot("thongtinchinh")
        thongtinphu = tracker.get_slot("thongtinphu")
        coso = tracker.get_slot("coso")
        namhoc = tracker.get_slot("namhoc")

        print(f'action_show_slot: {thongtinchinh} - {thongtinphu} - {coso} - {namhoc}\n')


        # dispatcher.utter_message(text=f"Xin loi, toi chua hieu y cua ban {nganh} - {thongtinphu}")
        return []

#### truy van can thongtinphu

#### truy van can thongtinchinh,nganh

#### truy van can nganh,thongtinphu

#### truy van can thongtinchinh,nganh,thongtinphu






def get_thong_tin_chinh(thongtinchinh, thongtinphu, coso):
    f = open('./data/collections/data_collect.json', encoding="utf8")
    data = json.load(f)
    data_return = f"Khong tim thay data {thongtinchinh}"

    return data_return

    



class ActionTruyVanData(Action):
   def name(self):
      return "action_truyvan_data"

   def run(self, dispatcher, tracker, domain):
        thongtinchinh = tracker.get_slot("thongtinchinh")
        thongtinphu = tracker.get_slot("thongtinphu")
        coso = tracker.get_slot("coso")

        if thongtinchinh is None:
            dispatcher.utter_message(text=f"Chua ro thong tin chinh")
            # return [UserUttered(text="/my_intent", parse_data=data)]
            return [UserUttered(text="/utter_hoi_chuc_nang")]
        else:    

            f = open('./data/collections/data_collect.json', encoding="utf8")
            data = json.load(f)
            is_nganh = False
            data_return = ""
            if thongtinchinh in nganh_data:
                is_nganh = True

            if is_nganh:
                data_return=get_thong_tin_nganh(thongtinchinh, thongtinphu, coso)
                dispatcher.utter_message(text=f"{data_return} - {thongtinchinh} - {thongtinphu} - {coso}")
            # if thongtinphu:
            #     dispatcher.utter_message(text=f"{data['chung']['nganh_dao_tao']}")
            # else:
            #     dispatcher.utter_message(text=f"{data['chung']['nganh_dao_tao']}")

                # dispatcher.utter_message(text=f"{data['chung']['nganh_dao_tao']}")
            
              
        return []


class ActionDefaultFallback(Action):

   def name(self):
      return "action_default_fallback"

   def run(self, dispatcher, tracker, domain):
        thongtinphu = tracker.get_slot("thongtinphu")
        dispatcher.utter_message(text=f"Xin lỗi, tôi chưa hiểu ý của bạn ")

        return []

class ActionResetAllSlots(Action):
    def name(self):
        return "action_reset_all_slots"

    def run(self, dispatcher, tracker, domain):
        return [AllSlotsReset()]
    
class ActionNganhDaoTao(Action):
    def name(self):
        return "action_nganh_dao_tao"

    def run(self, dispatcher, tracker, domain):
        f = open('./data/collections/data_collect.json', encoding="utf8")
        data = json.load(f)
        if data["chung"]["nganh_dao_tao"]:
            dispatcher.utter_message(text=f"{data['chung']['nganh_dao_tao']}")
        else:
            dispatcher.utter_message(text=f"Học viện Công nghệ Bưu chính Viễn thông hiện đang đào tạo các ngành như:\n - Kỹ thuật Điện tử viễn thông\n - Công nghệ Kỹ thuật Điện, điện tử\n - Công nghệ thông tin\n - An toàn thông tin\n - Công nghệ đa phương tiện\n - Quản trị kinh doanh\n - Marketing\n - Kế toán")

        return []
    
    


########################################################################
# class ActionValidateMajorName(FormValidationAction):
#     def name(self) -> Text:
#         return "validate_request_time_learning_major_form"

#     def validate_request_time_learning_major_form(
#             self,
#             slot_value: Any,
#             dispatcher: CollectingDispatcher,
#             tracker: Tracker,
#             domain: DomainDict,
#     ) -> Dict[Text, Any]:
#         # dispatcher.utter_message(text=f"OK! You want to have a {slot_value} pizza.")
#         return {"major": slot_value}

# class ActionGetTimeLearningMajor(Action):
#     def name(self):
#         return "action_get_time_learning_major"

#     def run(self, dispatcher, tracker, domain):
#         f = open('./data/data_db.json', encoding="utf8")
#         data = json.load(f)
#         major = tracker.get_slot("major")
#         if major:
#             major = major.lower()
#             print(f"major {major}")
#             for item in data["tuyen_sinh"]["bac"]["2023"]["nganh"]:
#                 for key in item["key_word"]:
#                     if key.lower().find(major) != -1:
#                         dispatcher.utter_message(text=f"Thời gian đào tạo của ngành {item['ten_nganh']} là {item['tgian']} ")
#                         break
#         else:
#             dispatcher.utter_message(text=f"Vui lòng cung cấp các ngành mà Học viện đào tạo")
#         f.close()
#         return []

# class ActionGetPoints(Action):
#     def name(self):
#         return "action_get_all_points"

#     def run(self, dispatcher, tracker, domain):
#         f = open('./data/data_db.json', encoding="utf8")
#         data = json.load(f)
#         result = ""
#         for item in data["tuyen_sinh"]["bac"]["2023"]["nganh"]:
#             result += f"{item['ten_nganh']}: {item['diem_chuan']['diem']}\n"

#         dispatcher.utter_message(text=f"{result}")
#         f.close()
#         return []

# class ActionGetAllJoins(Action):
#     def name(self):
#         return "action_get_all_joins"

#     def run(self, dispatcher, tracker, domain):
#         f = open('./data/data_db.json', encoding="utf8")
#         data = json.load(f)
#         dispatcher.utter_message(text=f"{data['tuyen_sinh']['bac']['2023']['phuong_thuc_tuyen_sinh']['noi_dung']}")
#         f.close()
#         return []


# class ActionGetAllMajors(Action):
#     def name(self):
#         return "action_get_all_majors"

#     def run(self, dispatcher, tracker, domain):
#         f = open('./data/data_db.json', encoding="utf8")
#         data = json.load(f)
#         dispatcher.utter_message(text=f"{data['tuyen_sinh']['nganh_dao_tao']}")
#         f.close()
#         return []



# class ActionValidateSchoolId(FormValidationAction):
#     def name(self) -> Text:
#         return "validate_request_school_id_form"

#     def validate_pizza_size(
#             self,
#             slot_value: Any,
#             dispatcher: CollectingDispatcher,
#             tracker: Tracker,
#             domain: DomainDict,
#     ) -> Dict[Text, Any]:
#         # dispatcher.utter_message(text=f"OK! You want to have a {slot_value} pizza.")
#         return {"branch": slot_value}


# class ActionSchoolId(Action):
#     def name(self) -> Text:
#         return "action_school_id"

#     def run(self, dispatcher: CollectingDispatcher,
#                         tracker: Tracker,
#                         domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
#         f = open('./data/data_db.json', encoding="utf8")
#         data = json.load(f)
#         # branch = tracker.get_latest_entity_values("branch", None)
#         branch= tracker.get_slot("branch")
#         print(f"slottt  {branch}")
#         dispatcher.utter_message(text=f"run action {branch} - {data['tuyen_sinh']['bac']['ma_truong']}")
#         f.close()

#         return [SlotSet("branch", "")]

#
#
# class ActionHelloWorld(Action):
#
#     def name(self) -> Text:
#         return "action_hello_world"
#
#     def run(self, dispatcher: CollectingDispatcher,
#             tracker: Tracker,
#             domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
#
#         dispatcher.utter_message(text="Hello World!")
#
#         return []
