export function nativeRedditQuery(raw:string){
 const query=raw.replace(/site:reddit\.com\/r\/([a-z0-9_]+)/gi,'subreddit:$1').trim();
 if(!query||/\bsite:/i.test(query))throw new Error('Search query needs native Reddit syntax');
 return query.slice(0,512);
}
