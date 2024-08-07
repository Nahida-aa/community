# import eventlet
# eventlet.monkey_patch()
# clelery_tasks/sms/tasks.py

import os
import sys
# 添加导包路径
B_DIR = os.path.dirname(
    os.path.dirname(
        os.path.dirname(
            os.path.abspath(__file__)
)))
sys.path.insert(1,B_DIR)
sys.path.insert(0,os.path.join(B_DIR,'utils'))
# 'D:\stu\zipy\anaconda3\envs\py311_web\lib\site-packages\click_repl'

import logging
from celery_tasks.main import celery_app

# 为celery使⽤django配置⽂件进⾏设置
if not os.getenv('DJANGO_SETTINGS_MODULE'):
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'settings.dev')
    # os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'settings')

from utils.huyi_sms.sms3 import send_sms_code

logger = logging.getLogger('django')

@celery_app.task(name='huyi_send_sms_code')
def huyi_send_sms_code(phone, smscode_str):
    """
    发送短信异步任务
    :param phone: ⼿机号
    :param smscode: 短信验证码
    :return: 成功 code=2 或 失败 smsid=0
    """
    try:
    # 调⽤外部接⼝执⾏发送短信任务
        ret = send_sms_code(smscode_str,phone)
 
    except Exception as e:
        logger.error(f"celery:{e}")
    
    if ret.get('code') != 2:
        logger.error('Error: code is not 2')
    
    return ret.get('code',None)