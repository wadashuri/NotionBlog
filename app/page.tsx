import Link from 'next/link'
import { NEXT_PUBLIC_SITE_TITLE } from './server-constants'
import GoogleAnalytics from '../components/google-analytics'
import styles from '../styles/page.module.css'

const RootPage = () => (
  <>
    <GoogleAnalytics pageTitle={NEXT_PUBLIC_SITE_TITLE} />
    <div className={styles.container}>
      <div>
        <h2>ようこそ!</h2>
        <p>このサイトはwebエンジニアのコードスニペットをまとめた場所です！</p>
        <p>おもにPHP,Laravelなどのバックエンドから最新のフロントの技術まで、すぐに使えるプログラムパーツを中心に投稿していきます。</p>
        <p>
        ポートフォリオ集は{' '}
          <Link href="https://onlibrary.net/service">
            コチラ
          </Link>
        </p>
      </div>
    </div>
  </>
)

export default RootPage
