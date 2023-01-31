//
//  MockCommentData.swift
//  PixelgramSwiftUITests
//
//  Created by M_955328 on 4/20/22.
//

import Foundation

class MockCommentData{
    
    let jsonData = """
{
  "content": [
    {
      "createdOn": "2022-04-20T12:14:56.457+00:00",
      "id": 76,
      "postId": 6,
      "author": {
        "id": 6,
        "username": "nofun",
        "profileImageUrl": "https://ih1.redbubble.net/image.288465974.0256/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
      },
      "message": "comment H"
    },
    {
      "createdOn": "2022-04-20T12:14:56.452+00:00",
      "id": 64,
      "postId": 6,
      "author": {
        "id": 10,
        "username": "dropthemike",
        "profileImageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0c/Shure_mikrofon_55S.jpg"
      },
      "message": "comment V"
    },
    {
      "createdOn": "2022-04-20T12:14:56.452+00:00",
      "id": 63,
      "postId": 6,
      "author": {
        "id": 8,
        "username": "ryenmarinaise",
        "profileImageUrl": "https://indianakitchen.com/wp-content/uploads/2015/03/Ham-Sandwich.jpg"
      },
      "message": "comment C"
    },
    {
      "createdOn": "2022-04-20T12:14:56.443+00:00",
      "id": 47,
      "postId": 6,
      "author": {
        "id": 4,
        "username": "starwarsfan",
        "profileImageUrl": "https://www.cnet.com/a/img/41Pn-v6oEkbVKHocW5poKmvqaPk=/940x0/2020/12/11/01a5b2d9-0c22-4dc6-8730-5ceea3d9c79b/the-mandalorian-14-din-grogu.jpg"
      },
      "message": "comment X"
    },
    {
      "createdOn": "2022-04-20T12:14:56.440+00:00",
      "id": 37,
      "postId": 6,
      "author": {
        "id": 7,
        "username": "gambler",
        "profileImageUrl": "https://assets.simpleviewcms.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/lasvegas/strip_b86ddbea-3add-4995-b449-ac85d700b027.jpg"
      },
      "message": "comment U"
    }
  ],
  "pageable": {
    "sort": {
      "sorted": true,
      "unsorted": false,
      "empty": false
    },
    "pageNumber": 0,
    "pageSize": 5,
    "offset": 0,
    "paged": true,
    "unpaged": false
  },
  "totalElements": 6,
  "totalPages": 2,
  "last": false,
  "sort": {
    "sorted": true,
    "unsorted": false,
    "empty": false
  },
  "numberOfElements": 5,
  "first": true,
  "size": 5,
  "number": 0,
  "empty": false
}
"""
    func reloadData() -> Data{
        let data = Data(jsonData.utf8)
        return data
    }
}
