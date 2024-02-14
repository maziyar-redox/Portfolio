"use client";

import { IconSize } from "@/types/client-types";
import { useMediaQuery } from "usehooks-ts";

export function ReactIcon({
    size = 256,
    color = "#00d8ff"
}: IconSize) {
    const matches = useMediaQuery('(max-width: 1024px)');
    return (
        <svg height={matches ? 50 : 100} preserveAspectRatio="xMidYMid" viewBox="0 0 256 228" width={matches ? 50 : 100} xmlns="http://www.w3.org/2000/svg">
            <path d="m210.483381 73.8236374c-2.655683-.9140871-5.407514-1.7789613-8.240911-2.5969006.465702-1.900627.893126-3.7766474 1.273161-5.6207704 6.238212-30.2810742 2.159451-54.6757186-11.768303-62.70747357-13.354969-7.70138944-35.196001.32854284-57.254392 19.52528477-2.121175 1.8459457-4.248274 3.8003425-6.374459 5.8486085-1.4167-1.3551821-2.831119-2.6647964-4.241893-3.9174513-23.117839-20.52640617-46.2899038-29.17651417-60.2039874-21.12151965-13.3422097 7.72371765-17.293381 30.65700725-11.6780788 59.35460545.5422551 2.7718805 1.1761011 5.6025433 1.8928804 8.4805964-3.2795041.9309471-6.4455448 1.9234107-9.4748826 2.9792133-27.1031859 9.4493647-44.4125156 24.2588525-44.4125156 39.6201647 0 15.865292 18.5815786 31.778428 46.8116526 41.427378 2.2278027.761436 4.5394499 1.481405 6.921727 2.16492-.7732831 3.112727-1.4458617 6.163025-2.0104451 9.138138-5.3541994 28.199544-1.1729114 50.591033 12.1337554 58.265994 13.744572 7.926039 36.8118301-.221003 59.2734951-19.855194 1.775316-1.552035 3.557011-3.197938 5.341896-4.923129 2.313471 2.227802 4.623294 4.336217 6.920816 6.313853 21.756733 18.722383 43.245072 26.282514 56.539435 18.586137 13.730902-7.948824 18.193343-32.002622 12.39987-61.267992-.442462-2.235094-.957376-4.51849-1.535629-6.842439 1.61993-.478918 3.210241-.973326 4.760909-1.487329 29.347849-9.723682 48.442518-25.443157 48.442518-41.520337 0-15.4169044-17.867534-30.3261857-45.516619-39.8443576zm-6.365346 70.9839276c-1.399838.463422-2.836131.911353-4.299764 1.345612-3.23986-10.256823-7.612532-21.163442-12.963542-32.431867 5.106312-11.000033 9.309927-21.7672137 12.459108-31.9575086 2.618773.7577901 5.160537 1.5570469 7.609799 2.4005042 23.689712 8.1552432 38.140127 20.2129004 38.140127 29.5036894 0 9.896384-15.60601 22.743273-40.945728 31.13957zm-10.514281 20.834442c2.561813 12.940759 2.927721 24.64071 1.230782 33.78705-1.524693 8.218583-4.590941 13.698093-8.38217 15.892632-8.067754 4.669773-25.320578-1.400294-43.92722-17.411857-2.133022-1.835466-4.281537-3.79533-6.436887-5.869571 7.21336-7.889128 14.422619-17.060529 21.458721-27.246268 12.375719-1.098179 24.067925-2.893546 34.671062-5.34463.522205 2.106593.986084 4.17263 1.385712 6.192644zm-106.3275674 48.872679c-7.8822932 2.783728-14.1601491 2.863471-17.9550235.675312-8.0750442-4.65747-11.4320133-22.635733-6.8529197-46.751959.5244838-2.761856 1.1487607-5.598897 1.8682739-8.498823 10.4869402 2.318938 22.0934778 3.987625 34.4988161 4.993303 7.0834926 9.967015 14.5009956 19.128391 21.9759136 27.150121-1.633145 1.57664-3.259911 3.07764-4.877562 4.492059-9.932382 8.682006-19.8857245 14.841841-28.6574984 17.939987zm-36.9275725-69.767727c-12.4828036-4.266499-22.7915743-9.811627-29.8577507-15.862556-6.349397-5.437588-9.5550817-10.835988-9.5550817-15.216408 0-9.321775 13.8976794-21.2117433 37.0765787-29.2931669 2.8124357-.980616 5.7565619-1.904728 8.8118733-2.7727918 3.2034061 10.4204114 7.4056553 21.3151817 12.4768798 32.3320737-5.1368419 11.18048-9.3987847 22.248865-12.6336326 32.791396-2.1781339-.626099-4.288372-1.285007-6.3188668-1.978547zm12.3784537-84.2591517c-4.8110332-24.5873955-1.6158291-43.1352541 6.4245837-47.7895344 8.5644409-4.95821666 27.5028138 2.1111493 47.4632705 19.834689 1.275894 1.132812 2.556801 2.3184823 3.841353 3.5451637-7.438008 7.986643-14.787615 17.079213-21.8082236 26.9874439-12.0398868 1.115952-23.5648583 2.9085836-34.1611607 5.3090876-.6661993-2.6798338-1.2563004-5.3127329-1.7598229-7.8868498zm110.4268332 27.2672294c-2.533105-4.3754063-5.133652-8.647374-7.784777-12.8026884 8.168002 1.032563 15.99379 2.4032381 23.342942 4.0805836-2.206387 7.0711887-4.956393 14.4645409-8.19352 22.0438091-2.322127-4.4086708-4.778224-8.8537956-7.364645-13.3217043zm-45.03178-43.8611468c5.04434 5.464929 10.09597 11.566438 15.064668 18.1865069-5.006975-.2364961-10.075921-.3595288-15.186788-.3595288-5.062567 0-10.094147.1202987-15.070136.3526937 4.97371-6.5585527 10.069085-12.6518596 15.192256-18.1796718zm-45.3202226 43.9367891c-2.5303719 4.3877096-4.9409009 8.8086837-7.2265745 13.23786-3.1847235-7.5528392-5.9092136-14.9799114-8.1347379-22.1513491 7.3040395-1.6345118 15.0929189-2.971011 23.2089741-3.98398-2.6884917 4.1935912-5.3104547 8.4970007-7.8476617 12.8965578zm8.0814237 65.35222c-8.38536-.935504-16.2913482-2.203195-23.5935651-3.792596 2.2610672-7.299483 5.0457066-14.88513 8.2978701-22.600646 2.2915975 4.425987 4.7116957 8.848784 7.2575606 13.246063h.0004556c2.5932554 4.479756 5.2799243 8.86792 8.0376788 13.147179zm37.5413689 31.030206c-5.183321-5.592518-10.353427-11.778782-15.402779-18.433027 4.901712.192295 9.899117.290722 14.978089.290722 5.217952 0 10.37621-.117565 15.453359-.343581-4.985103 6.774089-10.018505 12.969922-15.028669 18.485886zm52.198205-57.816696c3.421675 7.798904 6.306108 15.344908 8.596338 22.519991-7.422515 1.693293-15.436498 3.057134-23.880185 4.070559 2.657506-4.211364 5.280835-8.556696 7.858597-13.026427 2.607838-4.522133 5.083984-9.051102 7.42525-13.564123zm-16.89831 8.100562c-4.001751 6.938586-8.110131 13.5623-12.280938 19.81464-7.596585.543165-15.444702.822951-23.443647.822951-7.966593 0-15.71583-.247433-23.177988-.731817-4.338953-6.334359-8.536645-12.977667-12.5128789-19.846081h.0009114c-3.9657532-6.849729-7.6157223-13.757331-10.9230227-20.626198 3.306389-6.884818 6.9467889-13.800165 10.8897582-20.637592l-.0009113.001367c3.9534496-6.8556538 8.1142323-13.4666093 12.4130843-19.7613253 7.613444-.5755193 15.420551-.8758102 23.310591-.8758102h.000456c7.925582 0 15.742713.3025691 23.353878.8831012 4.233235 6.2486926 8.365766 12.8382311 12.334709 19.6947964 4.014056 6.9335749 7.70139 13.8028979 11.03603 20.5400769-3.324615 6.852919-7.003747 13.791507-11.000032 20.721891zm22.560091-122.1240512c8.572644 4.943635 11.906372 24.881307 6.520276 51.0257494-.343581 1.6682319-.730449 3.3674497-1.150584 5.0894514-10.620909-2.4506285-22.154083-4.274246-34.229054-5.407058-7.03428-10.0171377-14.323738-19.1238337-21.640537-27.0079496 1.967156-1.8924245 3.931578-3.6969038 5.887797-5.399767 18.899641-16.4476453 36.563943-22.94149194 44.612102-18.3004262zm-58.284676 78.4351498c12.624974 0 22.859925 10.2344954 22.859925 22.8599254 0 12.624974-10.234951 22.859927-22.859925 22.859927-12.624975 0-22.859926-10.234953-22.859926-22.859927 0-12.62543 10.234951-22.8599254 22.859926-22.8599254z" fill={color}/>
        </svg>
    );
};