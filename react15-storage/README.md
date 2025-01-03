# Vite + React + Firebase Storage

이 프로젝트는 Vite를 사용해 생성된 React 프로젝트로, Firebase Storage를 활용하여 파일을 참조, 업로드, 목록 확인, 다운로드, 삭제할 수 있는 기능을 포함하고 있습니다.

## 주요 기능

1. **파일 업로드**  
   사용자가 Firebase Storage에 파일을 업로드할 수 있습니다.

2. **파일 목록 조회**  
   Storage에 저장된 파일 목록을 가져와 화면에 표시합니다.

3. **파일 다운로드**  
   파일 목록에서 선택한 파일을 다운로드할 수 있습니다.

4. **파일 삭제**  
   파일 목록에서 선택한 파일을 Storage에서 삭제합니다.

---

## 설치 및 실행

### 1. 프로젝트 클론

```bash
git clone <repository-url>
cd <repository-folder>
```

### 2. 의존성 설치

```bash
npm install
```

### 3. 환경 변수 설정

Firebase 설정을 위해 프로젝트 루트에 `.env` 파일을 생성하고 다음 내용을 추가하세요.

```env
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

> Firebase 콘솔에서 설정 값을 가져와 입력하세요.

### 4. 개발 서버 실행

```bash
npm run dev
```

---

## 사용 기술

- **React**: 사용자 인터페이스 개발
- **Vite**: 빠른 개발 환경 구성
- **Firebase Storage**: 클라우드 파일 저장소 관리
- **Firebase SDK**: Firebase와의 통합 작업

---

## 화면 구성

1. **파일 업로드**: 파일 선택 후 업로드 버튼 클릭
2. **파일 목록**: Storage에 저장된 파일 목록을 테이블 형식으로 표시
3. **파일 다운로드**: 목록에서 원하는 파일을 선택하여 다운로드
4. **파일 삭제**: 목록에서 원하는 파일을 선택하여 삭제

---

## 실행 화면

프로젝트 실행 화면 예시는 아래와 같습니다.

- **파일 업로드 화면**
- **파일 목록 화면**

---

## 기타

- Firebase 사용을 위해 반드시 Firebase 프로젝트를 생성하고 Storage 규칙을 설정해야 합니다.
- Vite 개발 환경은 Node.js 16 이상을 권장합니다.

---

## 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다.
