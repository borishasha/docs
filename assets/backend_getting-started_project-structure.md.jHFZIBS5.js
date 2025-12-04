import{_ as s,c as n,o as p,aG as i}from"./chunks/framework.DytOxJW6.js";const k=JSON.parse('{"title":"프로젝트 구조","description":"","frontmatter":{},"headers":[],"relativePath":"backend/getting-started/project-structure.md","filePath":"backend/getting-started/project-structure.md"}'),e={name:"backend/getting-started/project-structure.md"};function l(t,a,o,c,r,h){return p(),n("div",null,a[0]||(a[0]=[i(`<h1 id="프로젝트-구조" tabindex="-1">프로젝트 구조 <a class="header-anchor" href="#프로젝트-구조" aria-label="Permalink to &quot;프로젝트 구조&quot;">​</a></h1><p>이 문서는 AxpFramework 프로젝트의 전체 구조와 각 디렉토리의 역할을 설명합니다.</p><h2 id="전체-디렉토리-구조" tabindex="-1">전체 디렉토리 구조 <a class="header-anchor" href="#전체-디렉토리-구조" aria-label="Permalink to &quot;전체 디렉토리 구조&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>AxpFramework/</span></span>
<span class="line"><span>├── pom.xml                          # Maven 빌드 설정</span></span>
<span class="line"><span>├── mvnw, mvnw.cmd                   # Maven Wrapper</span></span>
<span class="line"><span>├── src/</span></span>
<span class="line"><span>│   ├── main/</span></span>
<span class="line"><span>│   │   ├── java/</span></span>
<span class="line"><span>│   │   │   ├── axpFramework/        # 공통 프레임워크 모듈</span></span>
<span class="line"><span>│   │   │   ├── ess/                 # ESS 비즈니스 모듈</span></span>
<span class="line"><span>│   │   │   └── fcm/                 # FCM 비즈니스 모듈</span></span>
<span class="line"><span>│   │   └── resources/</span></span>
<span class="line"><span>│   │       ├── application.yaml     # 기본 설정 파일</span></span>
<span class="line"><span>│   │       ├── config/              # 환경별 설정 파일</span></span>
<span class="line"><span>│   │       ├── mapper/              # MyBatis XML 매퍼</span></span>
<span class="line"><span>│   │       ├── mapper-config/       # MyBatis 설정 파일</span></span>
<span class="line"><span>│   │       ├── report/              # 리포트 템플릿</span></span>
<span class="line"><span>│   │       └── lib/                 # 외부 라이브러리</span></span>
<span class="line"><span>│   └── test/</span></span>
<span class="line"><span>│       ├── java/                    # 테스트 코드</span></span>
<span class="line"><span>│       └── resources/               # 테스트 리소스</span></span>
<span class="line"><span>└── target/                          # 빌드 결과물</span></span></code></pre></div><h2 id="java-소스-코드-구조" tabindex="-1">Java 소스 코드 구조 <a class="header-anchor" href="#java-소스-코드-구조" aria-label="Permalink to &quot;Java 소스 코드 구조&quot;">​</a></h2><h3 id="_1-공통-프레임워크-모듈-axpframework" tabindex="-1">1. 공통 프레임워크 모듈 (<code>axpFramework</code>) <a class="header-anchor" href="#_1-공통-프레임워크-모듈-axpframework" aria-label="Permalink to &quot;1. 공통 프레임워크 모듈 (\`axpFramework\`)&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>axpFramework/</span></span>
<span class="line"><span>├── AxpBootApplication.java          # 메인 애플리케이션 클래스</span></span>
<span class="line"><span>├── ai/                              # AI 서비스</span></span>
<span class="line"><span>│   ├── controller/</span></span>
<span class="line"><span>│   ├── mapper/</span></span>
<span class="line"><span>│   └── service/</span></span>
<span class="line"><span>├── common/                          # 공통 기능</span></span>
<span class="line"><span>│   ├── controller/                  # 공통 컨트롤러</span></span>
<span class="line"><span>│   ├── database/                    # DB 공통 서비스</span></span>
<span class="line"><span>│   │   ├── controller/</span></span>
<span class="line"><span>│   │   ├── mapper/</span></span>
<span class="line"><span>│   │   └── service/</span></span>
<span class="line"><span>│   ├── logging/                     # 로깅 AOP</span></span>
<span class="line"><span>│   ├── security/                    # 암호화 유틸리티</span></span>
<span class="line"><span>│   ├── token/                       # JWT 인증</span></span>
<span class="line"><span>│   └── utils/                       # 공통 유틸리티</span></span>
<span class="line"><span>├── config/                          # 설정 클래스</span></span>
<span class="line"><span>│   ├── AxpDataSourceConfig.java     # 데이터소스 설정</span></span>
<span class="line"><span>│   ├── AxpRedisConfig.java          # Redis 설정</span></span>
<span class="line"><span>│   ├── AxpSecurityConfig.java      # Security 설정</span></span>
<span class="line"><span>│   └── AxpWebConfig.java            # Web 설정</span></span>
<span class="line"><span>├── filter/                          # 필터 클래스</span></span>
<span class="line"><span>│   ├── auth/                        # JWT 인증 필터</span></span>
<span class="line"><span>│   ├── logging/                    # 로깅 필터</span></span>
<span class="line"><span>│   └── security/                    # 보안 필터</span></span>
<span class="line"><span>├── file/                            # 파일 관리</span></span>
<span class="line"><span>├── mail/                            # 메일 발송</span></span>
<span class="line"><span>├── report/                          # 리포트 생성</span></span>
<span class="line"><span>└── sms/                             # SMS 발송</span></span></code></pre></div><h3 id="_2-ess-비즈니스-모듈-ess" tabindex="-1">2. ESS 비즈니스 모듈 (<code>ess</code>) <a class="header-anchor" href="#_2-ess-비즈니스-모듈-ess" aria-label="Permalink to &quot;2. ESS 비즈니스 모듈 (\`ess\`)&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ess/</span></span>
<span class="line"><span>├── admin/                           # 관리자 기능</span></span>
<span class="line"><span>│   ├── controller/</span></span>
<span class="line"><span>│   ├── mapper/</span></span>
<span class="line"><span>│   └── service/</span></span>
<span class="line"><span>├── auth/                            # 인증 기능</span></span>
<span class="line"><span>│   ├── controller/</span></span>
<span class="line"><span>│   ├── mapper/</span></span>
<span class="line"><span>│   └── service/</span></span>
<span class="line"><span>├── com/                             # 공통 기능</span></span>
<span class="line"><span>│   ├── controller/</span></span>
<span class="line"><span>│   ├── mapper/</span></span>
<span class="line"><span>│   ├── service/</span></span>
<span class="line"><span>│   └── utils/</span></span>
<span class="line"><span>└── welfare/                         # 복지 기능</span></span>
<span class="line"><span>    ├── controller/</span></span>
<span class="line"><span>    ├── mapper/</span></span>
<span class="line"><span>    └── service/</span></span></code></pre></div><h3 id="_3-fcm-비즈니스-모듈-fcm" tabindex="-1">3. FCM 비즈니스 모듈 (<code>fcm</code>) <a class="header-anchor" href="#_3-fcm-비즈니스-모듈-fcm" aria-label="Permalink to &quot;3. FCM 비즈니스 모듈 (\`fcm\`)&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>fcm/</span></span>
<span class="line"><span>├── com/                             # 공통 기능</span></span>
<span class="line"><span>├── hri/                             # HRI 기능</span></span>
<span class="line"><span>└── sys/                             # 시스템 기능</span></span></code></pre></div><h2 id="리소스-파일-구조" tabindex="-1">리소스 파일 구조 <a class="header-anchor" href="#리소스-파일-구조" aria-label="Permalink to &quot;리소스 파일 구조&quot;">​</a></h2><h3 id="_1-설정-파일-resources-config" tabindex="-1">1. 설정 파일 (<code>resources/config/</code>) <a class="header-anchor" href="#_1-설정-파일-resources-config" aria-label="Permalink to &quot;1. 설정 파일 (\`resources/config/\`)&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>config/</span></span>
<span class="line"><span>├── application-dev.yaml            # 개발 환경 설정</span></span>
<span class="line"><span>├── application-local.yaml           # 로컬 환경 설정</span></span>
<span class="line"><span>├── application-prod.yaml           # 운영 환경 설정</span></span>
<span class="line"><span>└── ai-config.yaml                  # AI 서비스 설정</span></span></code></pre></div><h3 id="_2-mybatis-매퍼-resources-mapper" tabindex="-1">2. MyBatis 매퍼 (<code>resources/mapper/</code>) <a class="header-anchor" href="#_2-mybatis-매퍼-resources-mapper" aria-label="Permalink to &quot;2. MyBatis 매퍼 (\`resources/mapper/\`)&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mapper/</span></span>
<span class="line"><span>├── axpFramework/                   # 공통 프레임워크 매퍼</span></span>
<span class="line"><span>│   ├── AxpCommProcMapper.xml</span></span>
<span class="line"><span>│   ├── oracle/</span></span>
<span class="line"><span>│   ├── postgres/</span></span>
<span class="line"><span>│   └── tibero/</span></span>
<span class="line"><span>└── ess/                            # ESS 모듈 매퍼</span></span>
<span class="line"><span>    └── com/</span></span></code></pre></div><h3 id="_3-mybatis-설정-resources-mapper-config" tabindex="-1">3. MyBatis 설정 (<code>resources/mapper-config/</code>) <a class="header-anchor" href="#_3-mybatis-설정-resources-mapper-config" aria-label="Permalink to &quot;3. MyBatis 설정 (\`resources/mapper-config/\`)&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mapper-config/</span></span>
<span class="line"><span>├── mybatis-config-tibero.xml       # Tibero 설정</span></span>
<span class="line"><span>├── mybatis-config-oracle.xml        # Oracle 설정</span></span>
<span class="line"><span>└── mybatis-config-postgresql.xml   # PostgreSQL 설정</span></span></code></pre></div><h3 id="_4-리포트-템플릿-resources-report" tabindex="-1">4. 리포트 템플릿 (<code>resources/report/</code>) <a class="header-anchor" href="#_4-리포트-템플릿-resources-report" aria-label="Permalink to &quot;4. 리포트 템플릿 (\`resources/report/\`)&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>report/</span></span>
<span class="line"><span>├── jasperForms/                    # JasperReports 템플릿 (.jrxml)</span></span>
<span class="line"><span>└── jasperfonts/                    # 리포트 폰트</span></span></code></pre></div><h2 id="패키지-네이밍-규칙" tabindex="-1">패키지 네이밍 규칙 <a class="header-anchor" href="#패키지-네이밍-규칙" aria-label="Permalink to &quot;패키지 네이밍 규칙&quot;">​</a></h2><h3 id="_1-표준-패키지-구조" tabindex="-1">1. 표준 패키지 구조 <a class="header-anchor" href="#_1-표준-패키지-구조" aria-label="Permalink to &quot;1. 표준 패키지 구조&quot;">​</a></h3><p>각 비즈니스 모듈은 다음 구조를 따릅니다:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{모듈명}/{도메인}/</span></span>
<span class="line"><span>├── controller/                     # REST API 컨트롤러</span></span>
<span class="line"><span>├── service/                        # 비즈니스 로직</span></span>
<span class="line"><span>├── mapper/                        # MyBatis Mapper 인터페이스</span></span>
<span class="line"><span>└── utils/                         # 모듈별 유틸리티 (선택)</span></span></code></pre></div><h3 id="_2-네이밍-규칙" tabindex="-1">2. 네이밍 규칙 <a class="header-anchor" href="#_2-네이밍-규칙" aria-label="Permalink to &quot;2. 네이밍 규칙&quot;">​</a></h3><ul><li><strong>패키지명</strong>: 소문자, 단어 구분 없음 (예: <code>ess.com</code>)</li><li><strong>클래스명</strong>: PascalCase (예: <code>EssComController</code>)</li><li><strong>메서드명</strong>: camelCase (예: <code>getUserList</code>)</li><li><strong>상수명</strong>: UPPER_SNAKE_CASE (예: <code>MAX_RETRY_COUNT</code>)</li></ul><h2 id="주요-파일-설명" tabindex="-1">주요 파일 설명 <a class="header-anchor" href="#주요-파일-설명" aria-label="Permalink to &quot;주요 파일 설명&quot;">​</a></h2><h3 id="_1-axpbootapplication-java" tabindex="-1">1. <code>AxpBootApplication.java</code> <a class="header-anchor" href="#_1-axpbootapplication-java" aria-label="Permalink to &quot;1. \`AxpBootApplication.java\`&quot;">​</a></h3><p>Spring Boot 애플리케이션의 진입점입니다.</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SpringBootApplication</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ComponentScan</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">basePackages</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;axpFramework&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ess&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;fcm&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">MapperScan</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">basePackages</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;axpFramework.common.database.mapper&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;ess.com.mapper&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> AxpBootApplication</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SpringBootServletInitializer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>주요 기능:</strong></p><ul><li>컴포넌트 스캔 범위 설정</li><li>MyBatis Mapper 스캔 설정</li><li>WAR 배포 지원</li></ul><h3 id="_2-pom-xml" tabindex="-1">2. <code>pom.xml</code> <a class="header-anchor" href="#_2-pom-xml" aria-label="Permalink to &quot;2. \`pom.xml\`&quot;">​</a></h3><p>Maven 빌드 설정 파일입니다.</p><p><strong>주요 설정:</strong></p><ul><li>Spring Boot 3.2.5</li><li>Java 17</li><li>WAR 패키징</li><li>프로파일 (local, dev, prod)</li></ul><h3 id="_3-application-yaml" tabindex="-1">3. <code>application.yaml</code> <a class="header-anchor" href="#_3-application-yaml" aria-label="Permalink to &quot;3. \`application.yaml\`&quot;">​</a></h3><p>기본 설정 파일로, 환경별 설정 파일을 import합니다.</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">spring</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  profiles</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    active</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;@spring.profiles.active@&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  config</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;optional:config/&quot;</span></span></code></pre></div><h2 id="모듈-간-의존성" tabindex="-1">모듈 간 의존성 <a class="header-anchor" href="#모듈-간-의존성" aria-label="Permalink to &quot;모듈 간 의존성&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>axpFramework (공통 프레임워크)</span></span>
<span class="line"><span>    ↑</span></span>
<span class="line"><span>    ├── ess (ESS 모듈)</span></span>
<span class="line"><span>    └── fcm (FCM 모듈)</span></span></code></pre></div><ul><li><strong>ess</strong>와 <strong>fcm</strong> 모듈은 <strong>axpFramework</strong>의 공통 기능을 사용합니다.</li><li>모듈 간 직접 의존성은 없습니다.</li></ul><h2 id="새로운-모듈-추가-시-구조" tabindex="-1">새로운 모듈 추가 시 구조 <a class="header-anchor" href="#새로운-모듈-추가-시-구조" aria-label="Permalink to &quot;새로운 모듈 추가 시 구조&quot;">​</a></h2><p>새로운 비즈니스 모듈을 추가할 때는 다음 구조를 따릅니다:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>새모듈명/</span></span>
<span class="line"><span>├── controller/</span></span>
<span class="line"><span>│   └── 새모듈Controller.java</span></span>
<span class="line"><span>├── service/</span></span>
<span class="line"><span>│   └── 새모듈Service.java</span></span>
<span class="line"><span>├── mapper/</span></span>
<span class="line"><span>│   └── 새모듈Mapper.java</span></span>
<span class="line"><span>└── utils/ (선택)</span></span>
<span class="line"><span>    └── 새모듈Util.java</span></span></code></pre></div><h2 id="다음-단계" tabindex="-1">다음 단계 <a class="header-anchor" href="#다음-단계" aria-label="Permalink to &quot;다음 단계&quot;">​</a></h2><p>프로젝트 구조를 이해했다면 다음 문서를 참고하세요:</p><ul><li><a href="./../project-structure/framework.html">공통 프레임워크 모듈</a></li><li><a href="./../project-structure/business.html">비즈니스 모듈 구조</a></li><li><a href="./../development-guide/new-module/creation.html">새로운 모듈 추가 가이드</a></li></ul>`,48)]))}const g=s(e,[["render",l]]);export{k as __pageData,g as default};
