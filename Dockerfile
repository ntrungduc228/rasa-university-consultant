FROM python:3.10

WORKDIR /app

RUN pip install --upgrade pip
# RUN pip install rasa

RUN python -m pip install rasa

CMD tail -f /dev/null