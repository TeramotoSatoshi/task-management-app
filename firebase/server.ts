// サーバーサイトで実行されることを想定
import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// 既にFirebase Admin SDKが初期化されているか確認
if (!getApps()?.length) {
  // FirebaseのサービスアカウントキーをJSONで渡して初期化
  initializeApp({
    credential: cert(
      // 環境変数から認証情報を取得
      JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string)
    ),
  });
}

// Firebase Firestoreデータベースをインスタンス化
export const adminDB = getFirestore();
