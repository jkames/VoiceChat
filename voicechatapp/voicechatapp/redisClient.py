import redis

class RedisClient:
    def __init__(self, host='voicechat-redis-1', port=6379, db=0):
        self.client = redis.StrictRedis(host=host, port=port, db=db)

    def set(self, key, value):
        self.client.set(key, value)

    def get_client(self, key):
        return self.client.get(key)