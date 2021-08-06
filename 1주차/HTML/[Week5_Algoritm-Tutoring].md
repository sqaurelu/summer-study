# 1
<그림 1>과 같이 정사각형 모양의 지도가 있다.
1은 집이 있는 곳을, 0은 집이 없는 곳을 나타낸다.
철수는 이 지도를 가지고 연결된 집의 모임인 단지를 정의하고, 단지에 번호를 붙이려 한다.
여기서 연결되었다는 것은 어떤 집이 좌우, 혹은 아래위로 다른 집이 있는 경우를 말한다.
대각선상에 집이 있는 경우는 연결된 것이 아니다.
<그림 2>는 <그림 1>을 단지별로 번호를 붙인 것이다.
지도를 입력하여 단지수를 출력하고, 각 단지에 속하는 집의 수를 오름차순으로 정렬하여
출력하는 프로그램을 작성하시오.

```python
from collections import deque
n = int(input())
graph = []
count = []
dx = [-1,1,0,0]
dy = [0,0,-1,1]

for _ in range(n):
    graph.append(list(map(int,input())))

def apt(x,y):
    que = deque()
    que.append((x,y))
    j = 0
    count = [0]
    while que:
        x,y = que.popleft()
        if graph[x][y] == 1 or graph[x][y]==2:
            if graph[x][y]==1:
                count[0] += 1
            for i in range(4):
                nx = x + dx[i]
                ny = y + dy[i]
                if nx<0 or ny<0 or nx>=n or ny>=len(graph[0]):
                    continue
                if graph[nx][ny]==0:
                    continue
                if graph[nx][ny]==1:
                        que.append((nx,ny))
                        graph[x][y]=2
                        graph[nx][ny]=2
                        count[0]+=1

    return count
result = 0
for k in range(n):
    for l in range(len(graph[0])):
        count.append(apt(k,l))
for a in range(len(count)):
    count = [i for i in count if not 0 in i]
count.sort()

print(len(count))
for a in range(len(count)):
    print(count[a][0])

```
